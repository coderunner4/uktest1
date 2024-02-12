using Microsoft.EntityFrameworkCore;

namespace UKParliament.CodeTest.Data;

public class PersonManagerContext : DbContext
{
    public PersonManagerContext(DbContextOptions<PersonManagerContext> options) : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Department>().HasData(
            new Department { Id = 1, Name = "Sales" },
            new Department { Id = 2, Name = "Marketing" },
            new Department { Id = 3, Name = "Finance" },
            new Department { Id = 4, Name = "HR" });

        modelBuilder.Entity<Person>().HasData(
            new Person {Id = 1, FirstName = "John", LastName = "Deo", Email= "john.deo@abc.com", DepartmentId = 1 }
        );
    }

    public DbSet<Person> People { get; set; }

    public DbSet<Department> Departments { get; set; }
}