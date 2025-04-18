<<<<<<< HEAD
namespace PhamQuocTai_2122110011_ASP
{
    public class WeatherForecast
    {
        public DateTime Date { get; set; }
=======
namespace PhamQuocTai_2122110011
{
    public class WeatherForecast
    {
        public DateOnly Date { get; set; }
>>>>>>> 81baa28 (Kiem tra 1)

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string? Summary { get; set; }
    }
}
