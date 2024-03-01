import { useQuery } from 'react-query';

const useWeatherData = () => {
  const fetchWeatherData = async () => {
    const response = await fetch('/api/localdata'); // Ajusta la ruta de la API según tu configuración
    if (!response.ok) {
      throw new Error('No se pudieron obtener los datos meteorológicos');
    }

    const data = await response.json();
    return data.current_weather;
  };

  const { data, error, isLoading } = useQuery('weatherData', fetchWeatherData);

  return { data, error, isLoading };
};

export default useWeatherData;
