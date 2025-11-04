namespace POC.Requests
{
    public class ExternalApiRequest
    {
        private readonly HttpClient _client;

        public ExternalApiRequest(HttpClient client)
        {
            _client = client;
        }

        public async Task<T?> GetAsync<T>(string endpoint)
        {
            var response = await _client.GetAsync(endpoint);
            if (!response.IsSuccessStatusCode)
            {
                throw new HttpRequestException($"Erro na chamada a API externa: {response.StatusCode}");
            }
            return await response.Content.ReadFromJsonAsync<T>();
        }
    }
}