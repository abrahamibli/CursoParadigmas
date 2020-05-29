import React, { Fragment, useState } from 'react';

const Foco = (props) => {
    const [estadoFoco, setEstadoFoco] = useState(false);

    const control = () => {
        console.log("Click en el foco");
        setEstadoFoco(estadoFoco => !estadoFoco);
    }

    return (
        <Fragment>
            <div style={{display: "inline-block"}}>
                <div style={{float: "left", width: "50%"}}>
                    <img src={estadoFoco ? "assets/focoOn.png" : "assets/focoOff.png"} height="150" onClick={ control } alt="foco"/>
                    {props.ubicacion}
                </div>
            </div>
        </Fragment>
    );
}

export default Foco;