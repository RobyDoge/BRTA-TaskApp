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
        public async Task<bool> CreateTask(TaskModel taskModel)
        {
            return await _taskCollectionService.Create(taskModel);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTask(string id,[FromBody] TaskModel? task)
        {
            if (task == null) return BadRequest("Task cannot be null");
            var tasks = await _taskCollectionService.GetAll();

                if(await _taskCollectionService.Update(id, task)) return StatusCode(201);
                    return StatusCode(500);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTask(string taskId)
        {
            if (taskId == null) return BadRequest("Task id cannot be null");
            if (await _taskCollectionService.Delete(taskId)) return StatusCode(201);
            return StatusCode(500);

        }




    }
}
