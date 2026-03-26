using StudentServer.Models;

namespace StudentServer.Data;

public static class StudentData
{
    public static List<Student> Student = new List<Student>
    {
        new Student { Id = 1, FirstName = "Иван", MidName = "Иванович", LastName = "Иванов", Group = "1" },
        new Student { Id = 2, FirstName = "Анна", MidName = "Иванович", LastName = "Иванова", Group = "2" },
    };
}