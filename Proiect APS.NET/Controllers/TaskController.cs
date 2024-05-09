using Microsoft.AspNetCore.Mvc;
using Proiect_APS.NET.Models;

namespace Proiect_APS.NET.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController: ControllerBase
    {
        private static List<TaskModel> Tasks { get; } =
        [
            new TaskModel
            {
                Id = Guid.NewGuid(), Title = "First Task", Description = "First Task Description",
                AssignedTo = "Author_1",
                Status = "To do"
            },
            new TaskModel
            {
                Id = Guid.NewGuid(), /*CategoryId = "1",*/ Title = "Second Task",
                Description = "Second Task Description",
                AssignedTo = "Author_1", Status = "To do"
            },
            new TaskModel
            {
                Id = Guid.NewGuid(), /*CategoryId = "1",*/ Title = "Third Task", Description = "Third Task Description",
                AssignedTo = "Author_2", Status = "To do"
            },
            new TaskModel
            {
                Id = Guid.NewGuid(), /*CategoryId = "1",*/ Title = "Fourth Task",
                Description = "Fourth Task Description",
                AssignedTo = "Author_3", Status = "To do"
            },
            new TaskModel
            {
                Id = Guid.NewGuid(), /*CategoryId = "1",*/ Title = "Fifth Task", Description = "Fifth Task Description",
                AssignedTo = "Author_4", Status = "To do"
            }
        ];

        [HttpGet(Name = "GetTasks")]
        public IActionResult GetTasks()
        {
            return Ok(Tasks);
        }

        [HttpPost(Name = "CreateTask")]
        public IActionResult CreateTask([FromBody] TaskModel? task )
        {
            if (task == null)
            {
                return BadRequest("Task cannot be null");
            }
            return Ok(task);
        }

        [HttpPut(Name = "UpdateTask")]
        public IActionResult Put([FromBody] TaskModel? task)
        {
            if (task == null) return BadRequest("Task cannot be null");
            var found = false;
            foreach (var t in Tasks.Where(t => t.Id == task.Id))
            {
                found = true;
                t.Title = task.Title;
                t.Description = task.Description;
                t.AssignedTo = task.AssignedTo;
                t.Status = task.Status;
            }
            if(!found) return NotFound(404);

            return StatusCode(200);
        }

        [HttpDelete(Name = "DeleteTask")]
        public IActionResult Delete([FromBody] Guid? taskId)
        {
            if (taskId == null) return BadRequest("Task id cannot be null");
            var found = false;
            foreach (var t in Tasks.Where(t => t.Id == taskId))
            {
                found = true;
                Tasks.Remove(t);
                break;
            }
            if (!found) return NotFound(404);

            return StatusCode(200);

        }


        static List<TaskModel> _tasks = new List<TaskModel> { 
        new TaskModel { Id = Guid.NewGuid(), Title = "First Task", Description = "First Task Description" , AssignedTo = "Author_1", Status = "To do"},
        new TaskModel { Id = Guid.NewGuid(), CategoryId = "1", Title = "Second Task", Description = "Second Task Description", AssignedTo = "Author_1", Status = "To do" },
        new TaskModel { Id = Guid.NewGuid(), CategoryId = "1", Title = "Third Task", Description = "Third Task Description", AssignedTo = "Author_2", Status = "To do"  },
        new TaskModel { Id = Guid.NewGuid(), CategoryId = "1", Title = "Fourth Task", Description = "Fourth Task Description", AssignedTo = "Author_3", Status = "To do"  },
        new TaskModel { Id = Guid.NewGuid(), CategoryId = "1", Title = "Fifth Task", Description = "Fifth Task Description", AssignedTo = "Author_4", Status = "To do"  }
        };

    }
}
