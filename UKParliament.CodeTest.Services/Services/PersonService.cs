using UKParliament.CodeTest.Data;
using UKParliament.CodeTest.Data.Repository;

namespace UKParliament.CodeTest.Services.Services;

public class PersonService : IPersonService
{
    private IPersonRepository _personRepository;
    public PersonService(IPersonRepository personsRepository)
    {
        _personRepository = personsRepository;
    }

    public IEnumerable<PersonDTO> GetAllPersons()
    {
        return _personRepository.GetAll().Select(y => PersonDTO(y));
    }

    public PersonDTO? GetPersonById(int id)
    {
        var entity = _personRepository.GetById(id);
        return entity != null ? PersonDTO(entity) : null;
    }

    public PersonDTO? GetPersonByEmail(string email)
    {
        var entity = _personRepository.Find(y => y.Email == email).FirstOrDefault();
        return entity != null ? PersonDTO(entity) : null;
    }

    public int? AddPerson(PersonDTO person)
    {
        var newPerson = PersonEntity(person);
        _personRepository.Add(newPerson);
        _personRepository.Save();

        var personEntity = _personRepository.GetById(newPerson.Id);
        return personEntity != null ? personEntity.Id : null;
    }

    public bool? UpdatePerson(PersonDTO person)
    {
        var upPersonEntity = _personRepository.Find(y => y.Id == person.Id).FirstOrDefault();
        if (upPersonEntity == null)
        {
            return null;
        }

        upPersonEntity.FirstName = person.FirstName;
        upPersonEntity.LastName = person.LastName;
        upPersonEntity.Email = person.Email;
        upPersonEntity.DepartmentId = person.DepartmentId;

        _personRepository.Update(upPersonEntity);
        _personRepository.Save();

        // in case of exception cases, an exception will be thrown and return will not be true
        // that is alternative path not explicitly not capture here, so it can hanlded outside as side concerns
        return true;
    }

    public bool? RemovePerson(int id)
    {
        _personRepository.Remove(id);
        _personRepository.Save();

        return true;
    }

    private static PersonDTO PersonDTO(Person perEntity) =>
       new PersonDTO
       {
           Id = perEntity.Id,
           FirstName = perEntity.FirstName,
           LastName = perEntity.LastName,
           Email = perEntity.Email,
           DepartmentId = perEntity.DepartmentId
       };

    private static Person PersonEntity(PersonDTO personItem) =>
       new Person
       {
           Id = personItem.Id,
           FirstName = personItem.FirstName,
           LastName = personItem.LastName,
           Email = personItem.Email,
           DepartmentId = personItem.DepartmentId
       };
}