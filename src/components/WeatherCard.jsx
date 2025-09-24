import React from 'react';

const WeatherCard = ({ city, weatherData }) => {
  if (!weatherData) {
    return null;
  }
  return (
    <div className="bg-slate-800 text-white bg-opacity-600 border border-orange-300 shadow-lg rounded-lg p-6 text-center">
      <h2 className="text-xl font-bold"> Location: <b className='font-semibold text-2xl text-blue-500'>{city}</b> </h2>
      <p className="text-3xl"> Currents Temperature{" "}{weatherData.temperature}°C</p>
      <p className="text-gray-400 pt-2">Weather Condition:{weatherData.condition}</p>
      <div className="flex justify-around mt-4 text-sm">
        <p>Wind:💨 {weatherData.wind} km/h</p>
        <p>Humidity:💧 {weatherData.humidity}%</p>
      </div>
    </div>
  );
};


export default WeatherCard;