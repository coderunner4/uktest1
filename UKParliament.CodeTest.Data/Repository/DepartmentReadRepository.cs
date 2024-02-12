using System.Linq.Expressions;

namespace UKParliament.CodeTest.Data.Repository;

public class DepartmentReadRepository : IDepartmentReadRepository
{
    private protected readonly PersonManagerContext dbContext;

    public DepartmentReadRepository(PersonManagerContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public Department? GetById(int id)
    {
        return dbContext.Departments.FirstOrDefault(e => e.Id == id);
    }

    public IEnumerable<Department> GetAll()
    {
        return dbContext.Departments;
    }

    public IEnumerable<Department> Find(Expression<Func<Department, bool>> expression)
    {
        return dbContext.Departments.Where(expression);
    }
}
