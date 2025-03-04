import React from "react";

export default function Input({ cityName, setCityName, handleKeyDown, getData }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
      <input
        className="border border-gray-300 bg-white/20 backdrop-blur-md rounded-full text-white text-center px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
        type="text"
        placeholder="Enter city name"
        onChange={(e) => setCityName(e.target.value)}
        value={cityName}
        onKeyDown={handleKeyDown}
      />

      <button
        className="p-2 px-5 border border-blue-400 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all shadow-md hover:shadow-lg"
        onClick={() => getData(cityName)}
      >
        Get Weather
      </button>
    </div>
  );
}
