import React, { Fragment, useState } from 'react';

const Evento = () => {
    const [texto, setTexto] = useState("Texto desde");

    const cambiarTexto = () => {
        console.log("click en el boton");
        setTexto("Texto modificado");
    }

    return (
        <Fragment>
            <h2>{ texto }</h2>
            <button onClick={ () => cambiarTexto() }>Click aqui</button>
        </Fragment>
    );
}

export default Evento;