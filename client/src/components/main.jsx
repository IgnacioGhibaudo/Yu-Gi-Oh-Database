import React from "react";
import { Link } from 'react-router-dom';
import './style/Main.css'

function Main(){
    return (
    <main className="main">
        <div className="mainTop">
            <h1>¡Bienvenido!</h1>
            <Link to='/search'><button>Comenzar búsqueda</button></Link>
        </div>
        <div className="mainLeft">
            <h2>Carta aleatoria</h2>
        </div>
        <div className="mainRight">
            <Link to='/login'><button>Ingresar</button></Link>
            <Link to='/register'><button>Registrarse</button></Link>
        </div>
    </main>
    )
}

export default Main;