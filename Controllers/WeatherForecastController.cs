using Microsoft.AspNetCore.Mvc;

<<<<<<< HEAD
namespace PhamQuocTai_2122110011_ASP.Controllers
=======
namespace PhamQuocTai_2122110011.Controllers
>>>>>>> 81baa28 (Kiem tra 1)
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
<<<<<<< HEAD
                Date = DateTime.Now.AddDays(index),
=======
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
>>>>>>> 81baa28 (Kiem tra 1)
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
