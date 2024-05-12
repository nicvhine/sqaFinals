import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};
