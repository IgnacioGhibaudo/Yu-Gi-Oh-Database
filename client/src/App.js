import React from "react";
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import Search from './components/Search';
import NotFound from './components/NotFound';
import About from './components/About';

function App(){ 
    return(
        <>
        <Navbar /> 
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/search" element={<Search />}/>
            <Route path="/about" element={<About />}/>
            <Route element={<NotFound />}/>
        </Routes>
        <Footer /> 
        </> 
    )
}

export default App;