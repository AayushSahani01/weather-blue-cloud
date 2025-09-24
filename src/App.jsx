import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import MapPage from "./components/MapPage";
import axios from 'axios';

function App() {
  const [city, setCity] = useState("Delhi");
  const [coords, setCoords] = useState({ lat: 28.61, lon: 77.20 });
  const [weatherData, setWeatherData] = useState(null);

  // Fetch weather
  const fetchWeather = async (lat, lon, cityName = "") => {
    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      );
      const data = await res.json();
      console.log(data);

      setWeatherData({
        temperature: data.current_weather.temperature,
        wind: data.current_weather.windspeed,
        humidity: data.hourly?.relativehumidity_2m?.[0] || "N/A",
        condition: data.current_weather.weathercode === 0 ? "Clear Sky" : "Cloudy",
      });

      if (cityName) setCity(cityName);
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };

  // Search by city name (geocoding)
  const handleSearch = async (cityName) => {
    try {
      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
      );
      const data = await res.json();
      console.log(data);
      if (data.results && data.results.length > 0) {
        const { latitude, longitude, name } = data.results[0];
        setCoords({ lat: latitude, lon: longitude });
        fetchWeather(latitude, longitude, name);
      } else {
        alert("City not found!");
      }
    } catch (err) {
      console.error("Error fetching city:", err);
    }
  };

  const handleMapClick = (lat, lon) => {
    setCoords({ lat, lon });
    fetchWeather(lat, lon, `Lat: ${lat.toFixed(2)}, Lon: ${lon.toFixed(2)}`);
  };

  return (
    <div className="h-screen w-full p-0.5">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <div className="mt-8 pb-6">
        <WeatherCard city={city} weatherData={weatherData} />
      </div>
        <MapPage lat={coords.lat} lon={coords.lon} onMapClick={handleMapClick}  />
    </div>
  );
}

export default App;
