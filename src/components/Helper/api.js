import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '39759517-f2fc46fd889c78780f89bde04';

export const fetchImages = async apiParams => {
  const BASE_AXIOS_URL = `?key=${API_KEY}`;
  const response = await axios.get(BASE_AXIOS_URL, {
    params: apiParams,
  });
  return response.data;
};
