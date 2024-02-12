using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UKParliament.CodeTest.Services;
using UKParliament.CodeTest.Services.Services;
using UKParliament.CodeTest.Web.Controllers;
using Xunit;

namespace UKParliament.CodeTest.Tests
{
    public class PersonServiceTests
    {
        IPersonService _personService;
        public PersonServiceTests(IPersonService personService) {
            _personService = personService;
        }

        [Fact]
        public void AddPerson_Test()
        {
            var personId = 2;
            var person = GetTestPersonDTO(personId);

            //Act  
            var insertId = (int) _personService.AddPerson(person);
            var result =  _personService.GetPersonById(insertId);

            //Assert
            Assert.Equal(person.Id, result.Id);
        }

        [Fact]
        public void FailingTest()
        {
            Assert.Equal(5, Add(2, 2));
        }

        private PersonDTO GetTestPersonDTO(int personId)
        {
            var person = new PersonDTO()
            {
                Id = personId,
                FirstName = "Firstname",
                LastName = "Lastname",
                Email = "test@test.com",
                DepartmentId = 1
            };

            return person;
        }

        private int Add(int a, int b)
        {
            return a + b;
        }
    }
}
