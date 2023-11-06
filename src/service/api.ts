import {API_URL} from '@env';
import axios from 'axios';

export const fetchData = async (endpoint: string) => {
  try {
    const response = await axios.get(`${API_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
