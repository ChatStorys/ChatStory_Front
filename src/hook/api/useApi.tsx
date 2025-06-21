import axios from 'axios';

function useApi() {
  const BASE_URL = import.meta.env.VITE_ENVIRONMENT;
  const authApi = axios.create({
    baseURL: `${BASE_URL}/auth`,
    withCredentials: true,
  });
  const aiApi = axios.create({
    baseURL: `${BASE_URL}/ai`,
    withCredentials: true,
  });
  const storyApi = axios.create({
    baseURL: `${BASE_URL}/story`,
    withCredentials: true,
  });
  const archiveApi = axios.create({
    baseURL: `${BASE_URL}/archive`,
    withCredentials: true,
    headers: {
      Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJxd2VyMTIzNCIsImV4cCI6MTc1MDQ4MjY4NCwidHlwZSI6ImFjY2VzcyJ9.cJcZoMYB97SnnztwUHyEUO-fqLtVK82xzzsmom0wR_B6ok6SW5wNBQn-AQoMla6T4XJZYJKoqaTKhGSpHN_cRj74vQJ4LqCqjIMqbM9Fsa_tcO8NTNz0yQTYeJjADm-R-BImZvnNcikiIY0CWed8PIM0K4l7rhEE8sF2UJFT7Gqo9RV3ubV7hrrVGWWIfugcdmaCtnOL-Qbs_Oi2krkCGeOWfhSYBOb8lkAbA5N1Pa8O4KcNfZ94Adm6KYm3HUQVhN9SdWHjarrRVaeqeeWD50a0lGx3C3jN7mQvjih5f9V0KtatQ0rDqShiswgYWItG32O6uBkOTgrWRL_IgMxrfA`,
    },
  });

  return { authApi, storyApi, aiApi, archiveApi };
}

export default useApi;
