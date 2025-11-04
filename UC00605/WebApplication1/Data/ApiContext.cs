using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StandAuto.Models;
using System.Collections.Generic;

namespace StandAuto.Data

{
    public class ApiContext : DbContext
    {
        public DbSet<StandCars> StandCar { get; set; }

        public ApiContext(DbContextOptions<ApiContext> options) : base(options)
        {

        }
    }
}