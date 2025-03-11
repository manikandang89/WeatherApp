export const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=c87c30597f48494a8a765602250801&q=${city}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
    throw error;
  }
};
