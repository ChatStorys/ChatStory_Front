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
    baseURL: `${BASE_URL}/story/archive`,
    withCredentials: true,
  });

  return { authApi, storyApi, aiApi, archiveApi };
}

export default useApi;
