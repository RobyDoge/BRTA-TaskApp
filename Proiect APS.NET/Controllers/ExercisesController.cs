using Microsoft.AspNetCore.Mvc;

namespace Proiect_APS.NET.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ExercisesController : ControllerBase
    {
        static List<string> list = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

        [HttpGet("{id}", Name="Test")]
        public double Get(int id)
        {
            return id;
        }

        [HttpGet("2/{RouteParameter}")]
        public string Get2(string RouteParameter,[FromQuery] double queryParam1, [FromQuery] double queryParam2)
        {
            return RouteParameter + (queryParam1 + queryParam2).ToString();
        }

        [HttpPost("doubleList",Name="GetList")]
        public double GetSum([FromBody] List<double> doubleList)
        {
            if(doubleList is null) return 0;
            if(doubleList.Count == 0) return 0;
            double sum = 0;
            foreach(double number in doubleList)
            {
                sum += number;
            }
            return sum;
        }

        [HttpGet(Name ="GetStringList")]
        public List<string> GetList()
        {
            return list;
        }

    }
}
