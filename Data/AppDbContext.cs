<<<<<<< HEAD
﻿using PhamQuocTai_2122110011_ASP.Data;
using PhamQuocTai_2122110011_ASP.Model;
using Microsoft.EntityFrameworkCore;

namespace PhamQuocTai_2122110011_ASP.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<Product> Products { get; set; }
        public DbSet<User> Users { get; set; }
=======
﻿using Microsoft.EntityFrameworkCore;
using PhamQuocTai_2122110011.Model;

namespace PhamQuocTai_2122110011.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
   
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Brand> Brands { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
>>>>>>> 81baa28 (Kiem tra 1)

    }
}
