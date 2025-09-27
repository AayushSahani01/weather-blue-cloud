import React from 'react';

const WeatherCard = ({ city, weatherData }) => {
  if (!weatherData) {
    return null;
  }
  return (
    <>
    <div className='weather-card flex items-center flex-col p-10 w-2/3'>
      
      <span className="text-xl font-bold items-center text-center"> Your Location is : <b className='font-semibold text-2xl pl-2 text-blue-500 underline'>{city}</b> 📍
      </span>
      <p className="text-3xl font-serif mt-4 text-red-700 text-center"> Current Temperature<strong className='font-bold'>{"  "}{weatherData.temperature}°C 🌡 </strong></p>
      <p className="text-green-600 pt-4 pb-6">Today Weather Report is{" 🚀 "}{weatherData.condition}.
      </p>
      <div className="flex justify-start items-center w-full px-8 py-4 rounded-lg shadow-md border border-gray-300 font-medium ">
        <p>Wind Speed Status: <b>💨{weatherData.wind} km/h</b></p>
        <p>Humidity status:<b>💧 {weatherData.humidity}%</b></p>
      </div>
    </div>
    </>
  );
};


export default WeatherCard;