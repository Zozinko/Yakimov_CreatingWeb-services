using Microsoft.AspNetCore.Mvc;
using StudentServer.Data;
using StudentServer.Models;

namespace StudentsApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class StudentsController : ControllerBase
{
    // GET api/students
    [HttpGet]
    public ActionResult<List<Student>> Get()
    {
        return Ok(StudentData.Student);
    }

    // POST api/students
    [HttpPost]
    public ActionResult<Student> Create(Student student)
    {
        student.Id = StudentData.Student.Count > 0
            ? StudentData.Student.Max(s => s.Id) + 1
            : 1;

        StudentData.Student.Add(student);
        return Ok(student);
    }

    // PUT api/students/1
    [HttpPut("{id}")]
    public IActionResult Update(int id, Student updated)
    {
        var student = StudentData.Student.FirstOrDefault(s => s.Id == id);
        if (student == null) return NotFound();

        student.FirstName = updated.FirstName;
        student.MidName = updated.MidName;
        student.LastName = updated.LastName;
        student.Group = updated.Group;

        return Ok(student);
    }

    // DELETE api/students/1
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var student = StudentData.Student.FirstOrDefault(s => s.Id == id);
        if (student == null) return NotFound();

        StudentData.Student.Remove(student);
        return Ok();
    }
}