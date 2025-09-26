import React from 'react';
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import RouterTest from './Router.Test.jsx';
import WeatherNews from './components/WeatherNews.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>   
      <Route path="/" element={<RouterTest />} />
      <Route path="/news" element={<WeatherNews/>} />
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;