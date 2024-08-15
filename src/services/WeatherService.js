import axios from 'axios';

const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

export const getWeatherByCoordinates = (latitude, longitude) => {
  return axios.get(BASE_URL, {
    params: {
      latitude,
      longitude,
      hourly: 'temperature_2m,humidity_2m',
      timezone: 'auto'
    }
  });
};
