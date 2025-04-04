using PhamQuocTai_2122110011_ASP.Data;
using PhamQuocTai_2122110011_ASP.Model;
using Microsoft.EntityFrameworkCore;

namespace PhamQuocTai_2122110011_ASP.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<Product> Products { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
