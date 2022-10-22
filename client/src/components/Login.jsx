import React from "react";
import { Link } from 'react-router-dom';
import { Form, Formik } from 'formik';
import './style/Footer.css';

function Login(){
    return(
        <Formik initialValues={{
            email: "",
            contraseña: "",
        }} 
        onSubmit={(values) => {

        }}>
        {({handleChange, handleSubmit}) => (
            <Form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" name="email" onChange={ handleChange }></input>
            <label>Contraseña</label>
            <input type="password" name="contraseña" onChange={ handleChange }></input>
            <p>¿No tienes cuenta? <Link to="/register">Registrarse</Link></p>
            <button className="buttonLogin" type="submit">Ingresar</button>
        </Form>
        )}
        </Formik> 
    )
}

export default Login;