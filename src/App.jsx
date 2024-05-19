import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Navs from '../components/nav';
import Home from '../pages/home';
import Apidata from '../components/apidata';
import Country from '../pages/country';
import Footer from '../components/footer';
import Natures from '../pages/natures';
import Dish from '../pages/deshes';
import Animal from '../pages/animal';

function App() {
 

  return (
    <>
    <div className="container-fluid">
     <BrowserRouter>
     <Navs/>
     <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/country' element={<Country/>} />
    <Route path='/nature' element={<Natures/>} />
    <Route path='/dish' element={<Dish/>} />
    <Route path='/animal' element={<Animal/>} />
     </Routes>

     <Footer/>
     </BrowserRouter>
     {/* <Apidata/> */}
     </div>
    </>
  )
}

export default App
