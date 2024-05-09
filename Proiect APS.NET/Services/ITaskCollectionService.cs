using Proiect_APS.NET.Models;

namespace Proiect_APS.NET.Services
{
    public interface ITaskCollectionService : ICollectionService<TaskModel>
    {
        Task<List<TaskModel>> GetTasksByStatus(string status);
    }
}
