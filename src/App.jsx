import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import MapPage from "./components/MapPage";

function App() {
  return <div className="App">
    <Header />
    <SearchBar />
    <WeatherCard />
    <MapPage />
  </div>;
}
export default App;
