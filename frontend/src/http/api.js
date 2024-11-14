import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_BACKEND_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export const POST = async (endpoint, payload) => {
  try {
    const response = await api.post(endpoint, payload);
    return response?.data;
  } catch (error) {
    const errorMessage =
      error?.response?.data?.message || 'Something went wrong';
    return errorMessage;
  }
};

export const GET = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response?.data;
  } catch (error) {
    const errorMessage =
      error?.response?.data?.message || 'Something went wrong';
    return errorMessage;
  }
};
