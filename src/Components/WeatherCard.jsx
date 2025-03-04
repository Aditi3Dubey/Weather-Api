import React from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function WeatherCard({ data }) {
  return (
    <div className="mt-6 p-6 rounded-3xl bg-white/20 backdrop-blur-md shadow-lg text-white w-80 text-center">
      {/* City & Location Icon */}
      <div className="flex items-center justify-center gap-2">
        <FaLocationDot className="text-red-500 text-2xl" />
        <h1 className="text-3xl font-bold">{data.name}</h1>
      </div>

      {/* Weather Icon */}
      <img 
        className="w-20 mx-auto mt-2" 
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
        alt={data.weather[0].description} 
      />

      {/* Temperature */}
      <div className="flex items-center justify-center gap-2 text-xl font-medium mt-2">
        <img src="https://cdn-icons-png.flaticon.com/128/1684/1684375.png" className="w-6 h-6" alt="Temperature" />
        <span>{data.main.temp}°C</span>
      </div>

      {/* Weather Condition */}
      <div className="flex items-center justify-center gap-2 text-lg capitalize mt-2">
        <img src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png" className="w-6 h-6" alt="Weather Condition" />
        <span>{data.weather[0].description}</span>
      </div>

      {/* Wind Speed */}
      <div className="flex items-center justify-center gap-2 text-sm mt-2">
        <img src="https://cdn-icons-png.flaticon.com/128/1813/1813105.png" className="w-6 h-6" alt="Wind Speed" />
        <span>Wind Speed: {data.wind.speed} m/s</span>
      </div>
    </div>
  );
}
