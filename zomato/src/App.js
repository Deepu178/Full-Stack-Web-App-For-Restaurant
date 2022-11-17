// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import LogoBar from './components/LogoBar';
import Home from './components/Home/Home';
import React from 'react';
// import Logobar from './components/LogoBar';
import RestaurantDetails from './components/Restaurant/RestaurantDetails';
import Filter from './components/Filter/Filter';




function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
        <Route path='/details/:rName' element={<RestaurantDetails/>}></Route>
        <Route path='/filter' element={<Filter/>}></Route>

        </Routes>
      </Router>
    {/* <LogoBar/> */}
    {/* <Wallpaper/>
    <QuickSearch/> */}
    {/* <RestaurantDetails></RestaurantDetails> */}
    </div>
    
  );
}

export default App;
