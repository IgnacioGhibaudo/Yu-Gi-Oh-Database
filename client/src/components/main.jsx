import React from "react";
import { Link } from 'react-router-dom';
import './style/Search.css'

function Main(){
    return (
    <main>
        <h1>Bienvenido a la base de datos de Yu-Gi-Oh!</h1>
        <Link to='/search'>Comenzar búsqueda</Link>
        <div>
            <Link to='/login'>Acceder</Link>
            <Link to='/register'>Registrarse</Link>
        </div>
    </main>
    )
}

export default Main;