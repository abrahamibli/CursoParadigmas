import React from 'react';
import '../App.css';

const Header = () => {
    return (
        <div className="header">
            <div className="row">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Logo_Renovaci%C3%B3n_Universitaria_UACH.svg/1200px-Logo_Renovaci%C3%B3n_Universitaria_UACH.svg.png"/>
                <h4 className="header-title">CRUD React-Firebase</h4>
            </div>
        </div>
    );
}

export default Header;