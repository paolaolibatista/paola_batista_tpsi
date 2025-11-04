using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StandAuto.Data;
using StandAuto.Models;

namespace StandAuto.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StandController : ControllerBase
    {

        private readonly Data.ApiContext _context;

        public StandController(ApiContext context)
        {
            _context = context;
        }

        [HttpPost("/CreateEdit")]

        public JsonResult CreateEdit(StandCars StandVal)
        {
            if (StandVal.Id == 0)
            {
                _context.StandCar.Add(StandVal);
            }
            else
            {
                var StandValInDb = _context.StandCar.Find(StandVal.Id);
                if (StandValInDb == null)
                {
                    return new JsonResult(NotFound());
                }

            }

            _context.SaveChanges();

            return new JsonResult(Ok(StandVal));
        }

        [HttpGet("/Get")]
        public JsonResult Get(int id)
        {
            var result = _context.StandCar.Find(id);
            if (result == null)
            {
                return new JsonResult(NotFound());
            }
            return new JsonResult(Ok(result));
        }

        [HttpGet("/GetAll")]
        public JsonResult GetAll()
        {
            var result = _context.StandCar.ToList();
            return new JsonResult(Ok(result));
        }

        [HttpGet("/Delete")]
        public JsonResult Delete(int id)
        {
            var result = _context.StandCar.Find(id);
            if (result == null)
            {
                return new JsonResult(NotFound());
            }
            _context.StandCar.Remove(result);
            _context.SaveChanges();
            return new JsonResult(NoContent());
        }
    }
}