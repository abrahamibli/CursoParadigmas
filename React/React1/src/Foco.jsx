import React, { Fragment, useState } from 'react';

const Foco = (props) => {
    const [estadoFoco, setEstadoFoco] = useState(false);

    const control = () => {
        console.log("Click en el foco");
        setEstadoFoco(estadoFoco => !estadoFoco);
    }

    return (
        <Fragment>
            {props.ubicacion}
            <img src={estadoFoco ? "assets/focoOn.png" : "assets/focoOff.png"} onClick={ control } alt="foco"/>
            <br/>
        </Fragment>
    );
}

export default Foco;