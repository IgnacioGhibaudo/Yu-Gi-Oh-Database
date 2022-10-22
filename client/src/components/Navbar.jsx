import React from "react";
import { Link } from "react-router-dom";
import './style/Navbar.css';
import AccountMenu from './mui-components/AccountMenu'
import TemporaryDrawer from "./mui-components/TemporaryDrawer";

function Header(){
    return(
        <header>
            <TemporaryDrawer/>
            <img src="/logo.png" className="logo" alt="logo"></img>
            <AccountMenu/> 
        </header>
    )
}

export default Header;