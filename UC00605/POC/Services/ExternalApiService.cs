using POC.Models.Responses;
using POC.Requests;

namespace POC.Services
{
    public class ExternalApiService
    {
        private readonly ExternalApiRequest _request;
        private const string BaseEndpoint = "/api/marcas";
        public ExternalApiService (HttpClient client)
        {
            _request = new ExternalApiRequest (client);
        }

        public async Task<MarcasResponse> GetMarcasAsync()
        {
            var result = await _request.GetAsync<MarcasResponse>(BaseEndpoint);
            return result;
        }

        public async Task<ModeloResponse> GetModeloAsync()
        {
            var result = await _request.GetAsync<ModeloResponse>(BaseEndpoint);
            return result;
        }
    }
}
