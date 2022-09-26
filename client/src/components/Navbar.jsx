import React from "react";
import { Link } from "react-router-dom";
import './style/Navbar.css';
import AccountMenu from './mui-components/AccountMenu'
import TemporaryDrawer from "./mui-components/TemporaryDrawer";

function Header(){
    return(
        <header>
            <TemporaryDrawer/>
            <img src="/logo.png" alt="logo"></img>
            {/* <ul className="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul> */}
            <AccountMenu /> 
        </header>
    )
}

export default Header;