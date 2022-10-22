import React from "react";
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import Search from './components/Search';
import NotFound from './components/NotFound';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';

function App(){ 
    return(
        <>
        <Navbar/> 
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/search" element={<Search />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route element={<NotFound />}/>
        </Routes>
        <Footer/> 
        </> 
    )
}

export default App;