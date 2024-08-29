import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const HolaMundo = ({amigo}) => {
    
    return (
        <>
        <section className="conteiner mt-5">
        <h1 className="text-center">Hello {amigo}</h1>
        </section>
        </>
    );
};
export default HolaMundo;