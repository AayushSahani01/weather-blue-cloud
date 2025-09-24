import React from 'react';

const WeatherCard = ({ city, weatherData }) => {
  if (!weatherData) return null;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <h2 className="text-xl font-bold">{city}</h2>
      <p className="text-3xl">{weatherData.temperature}°C</p>
      <p className="text-gray-500">{weatherData.condition}</p>
      <div className="flex justify-around mt-4 text-sm">
        <p>💨 {weatherData.wind} km/h</p>
        <p>💧 {weatherData.humidity}%</p>
      </div>
    </div>
  );
};


export default WeatherCard;