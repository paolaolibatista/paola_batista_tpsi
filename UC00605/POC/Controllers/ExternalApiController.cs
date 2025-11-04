using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using POC.Services;

namespace POC.Controllers
{
    [Route("api/")]
    [ApiController]
    public class ExternalApiController : ControllerBase
    {
        private readonly ExternalApiService _service;

        public ExternalApiController(ExternalApiService service)
        {
            _service = service;
        }

        [HttpGet("nomemarcas")]

        public async Task<IActionResult> GetNomeMarca()
        {
            var result = await _service.GetMarcasAsync();
            return Ok(result);
        }
    }
}
