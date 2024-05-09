using MongoDB.Driver;
using Proiect_APS.NET.Models;
using Proiect_APS.NET.Settings;
using System.Threading.Tasks;

namespace Proiect_APS.NET.Services
{
    public class TaskCollectionService : ITaskCollectionService
    {
        private readonly IMongoCollection<TaskModel> _tasks;
        public TaskCollectionService(IMongoDBSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _tasks = database.GetCollection<TaskModel>(settings.TasksCollectionName);
        }


        public async Task<List<TaskModel>> GetAll()
        {
            var result = await _tasks.FindAsync(task => true);
            return result.ToList();
        }
        public async Task<bool> Create(TaskModel taskModel)
        {
            if (string.IsNullOrWhiteSpace(taskModel.Id))
            {
                taskModel.Id = Guid.NewGuid().ToString();
            }

            await _tasks.InsertOneAsync(taskModel);
            return true;
        }

        public async Task<bool> Delete(string id)
        {
            var result = await _tasks.DeleteOneAsync(taskModel => taskModel.Id == id);
            if (!result.IsAcknowledged && result.DeletedCount == 0)
            {
                return false;
            }
            return true;
        }

        public async Task<TaskModel> Get(string id)
        {
            return (await _tasks.FindAsync(taskModel => taskModel.Id == id)).FirstOrDefault();
        }

        public async Task<bool> Update(string id, TaskModel taskModel)
        {
            taskModel.Id = id;
            var result = await _tasks.ReplaceOneAsync(taskModel => taskModel.Id == id, taskModel);
            if (!result.IsAcknowledged && result.ModifiedCount == 0)
            {
                await _tasks.InsertOneAsync(taskModel);
                return false;
            }

            return true;
        }

        public async Task<List<TaskModel>> GetTasksByStatus(string status)
        {
            return (await _tasks.FindAsync(taskModel => taskModel.Status == status)).ToList();
        }

    }
}
