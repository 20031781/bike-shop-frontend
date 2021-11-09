"use strict"
/* NavLink: componente usato per specificare il collegamento attivo nella barra di navigazione
   setta ad Active il collegamento in uso */
import {NavLink} from "react-router-dom";
import React, {useState} from "react";

const NavBar = () => {
    const [loginStatus, setLoginStatus] = useState(() => {
        const user = localStorage.getItem("userData");
        if (user) {
            return JSON.parse(user);
        }
        return "";
    });

    // Effettua il logout
    const logout = () => {
        localStorage.removeItem("userData");
        setLoginStatus("");
    };

    return (
        <nav className="nav-bar">

            <div className="logo">
                <img src={"./img/logo.png"} alt="BIKE SHOP" width="250"/>
                BIKE SHOP
            </div>
            <NavLink exact to="/">Home</NavLink> {/* la base è home e da li vado avanti */}
            <NavLink to="/store">Store</NavLink> {/* se è un venditore allora mostra la sezione Vendere */}
            {loginStatus.seller && (<NavLink to="/sell">Vendere</NavLink>)}
            <NavLink to="/ContactUs">Contattaci</NavLink>
            {/* se loginStatus è vuoto allora appare il Accedi altrimenti il bottone Logout */}
            {loginStatus === "" && (<NavLink to="/login">Accedi</NavLink>)}
            {loginStatus !== "" && (<NavLink to="/" onClick={logout}>Logout</NavLink>)}
        </nav>
    );
};

export default NavBar;