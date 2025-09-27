import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import RouterTest from './Router.Test.jsx';
import WeatherNews from './components/WeatherNews.jsx';
import Page404 from './page404.jsx';
import Favourites from './components/Favourites.jsx';
import Alerts from './components/Alerts.jsx';
import Headers from './components/Header.jsx';

function App() {
  return (
    <BrowserRouter>
     
    <Routes>  
      <Route path="/" element={<><RouterTest /> <Headers /></> } />
      <Route path="/news" element={<><WeatherNews /><Headers /></> } />
      <Route path="/favourites" element={<><Favourites /><Headers /></> } />

      <Route path="/alerts" element={<div><Alerts className="mt-20"/><Headers /></div> } />

      <Route path="/*" element={<Page404/>} />
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;