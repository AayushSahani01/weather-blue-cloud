import React from 'react';

const WeatherCard = ({ city, weatherData }) => {
  if (!weatherData) {
    return null;
  }
  return (
    <div className='weather-card text-center '>
      <h2 className="text-xl font-bold"> Your Location is : <b className='font-semibold text-2xl text-blue-500'>{city}</b> </h2>
      <p className="text-3xl"> Currents Temperature{" "}{weatherData.temperature}°C</p>
      <p className="text-green-600 pt-4 ">Today Weather Report is{" "}{weatherData.condition}.
      </p>
      <div className="flex items-center w-full px-8 py-4 rounded-lg shadow-md border border-gray-300 justify-around font-medium ">
        <p>Wind:💨 {weatherData.wind} km/h</p>
        <p>Humidity:💧 {weatherData.humidity}%</p>
      </div>
    </div>
  );
};


export default WeatherCard;