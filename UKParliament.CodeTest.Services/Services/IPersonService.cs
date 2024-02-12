namespace UKParliament.CodeTest.Services.Services;

public interface IPersonService
{
    IEnumerable<PersonDTO> GetAllPersons();
    PersonDTO? GetPersonById(int id);
    PersonDTO? GetPersonByEmail(string email);
    int? AddPerson(PersonDTO person);
    bool? UpdatePerson(PersonDTO person);
    bool? RemovePerson(int id);
}