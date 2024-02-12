namespace UKParliament.CodeTest.Services.Services;

public interface IDepartmentService
{
    IEnumerable<DepartmentDTO> GetAllDepartments();
}