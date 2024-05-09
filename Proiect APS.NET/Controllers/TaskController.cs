using Microsoft.AspNetCore.Mvc;
using Proiect_APS.NET.Models;
using Proiect_APS.NET.Services;

namespace Proiect_APS.NET.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController: ControllerBase
    {
        ITaskCollectionService _taskCollectionService;

        public TaskController(ITaskCollectionService taskCollectionService)
        {
            _taskCollectionService = taskCollectionService ?? throw new ArgumentNullException(nameof(TaskCollectionService));
        }



        [HttpGet]
        public async Task<IActionResult> GetTasks()
        {
            List<TaskModel> tasks = await _taskCollectionService.GetAll();
            return Ok(tasks);
        }


        [HttpPost]
        public async Task<IActionResult> CreateTask([FromBody] TaskModel? task )
        {
            if (task == null)
            {
                return BadRequest("Task cannot be null");
            }
            if(await _taskCollectionService.Create(task)) return StatusCode(201);
            return StatusCode(500);
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] TaskModel? task)
        {
            if (task == null) return BadRequest("Task cannot be null");
            var found = false;
            var tasks = await _taskCollectionService.GetAll();
            foreach (var t in tasks.Where(t => t.Id == task.Id))
            {
                found = true;
                if(await _taskCollectionService.Update(task.Id, task)) return StatusCode(201);
                    return StatusCode(500);
            }
            if (!found) return NotFound(404);
            return StatusCode(200);
        }

        [HttpDelete]
        public async Task<IActionResult> Delete([FromBody] string? taskId)
        {
            if (taskId == null) return BadRequest("Task id cannot be null");
            var found = false;
            var tasks = await _taskCollectionService.GetAll();
            foreach (var t in tasks.Where(t => t.Id == taskId))
            {
                found = true;
                if(await _taskCollectionService.Delete(taskId)) return StatusCode(201);
                    return StatusCode(500);
            }
            if (!found) return NotFound(404);

            return StatusCode(200);

        }




    }
}
