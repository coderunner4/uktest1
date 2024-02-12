using UKParliament.CodeTest.Data;
using UKParliament.CodeTest.Data.Repository;

namespace UKParliament.CodeTest.Services.Services;

public class DepartmentService : IDepartmentService
{
    private IDepartmentReadRepository _departmentReadRepository;
    public DepartmentService(IDepartmentReadRepository departmentReadRepository)
    {
        _departmentReadRepository = departmentReadRepository;
    }

    public IEnumerable<DepartmentDTO> GetAllDepartments()
    {
        return _departmentReadRepository.GetAll().Select(y => DepartmentDTO(y));
    }

    private static DepartmentDTO DepartmentDTO(Department deptItem) =>
       new DepartmentDTO
       {
           Id = deptItem.Id,
           Name = deptItem.Name
       };
}