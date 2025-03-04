import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherCard from "./Components/WeatherCard";
import Input from "./Components/Input";

export default function App() {
  let [cityName, setCityName] = useState("");
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  const API_KEY = "1660d5f9cdd855c28d95b62272dfc998"; // Your API Key

  function getData(city) {
    if (!city) return;
    setLoading(true);
    setError(null);

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("City not found! Please try again.");
        setLoading(false);
      });
  }

  function getLocationWeather(lat, lon) {
    setLoading(true);
    setError(null);

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching location weather:", error);
        setError("Unable to get weather for your location.");
        setLoading(false);
      });
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        getLocationWeather(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.error("Geolocation Error:", error);
        setError("Location access denied. Please enter a city.");
      }
    );
  }, []);

  function handleKeyDown(e) {
    if (e.key === "Enter") getData(cityName);
    if (e.key === "Escape") setCityName("");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Weather App
      </h1>

      <Input cityName={cityName} setCityName={setCityName} handleKeyDown={handleKeyDown} getData={getData} />

      {loading && <p className="mt-4 text-lg animate-pulse">Loading...</p>}
      {error && <p className="mt-4 text-red-400 text-lg">{error}</p>}

      {data && <WeatherCard data={data} />}
    </div>
  );
}
