"use strict";
import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import Axios from "axios";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState(() => { // metodo facile per implementare il login senza validare e svalidare coockies
        const user = localStorage.getItem("userData");
        if (user) {
            return JSON.parse(user).username;
        }
        return "";
    });
    const [error, setError] = useState(false);

    const history = useHistory(); // L' hook useHistory dà l'accesso all'istanza della cronologia che si può usare per navigare.

    // Se l'utente è già loggato e va manualmente su Login l'applicazione lo ri direziona a "/"
    if (loginStatus !== "") {
        history.push("/"); // push del percorso "/" sullo stack della cronologia
    }

    // Funzione che gestisce il login di un utente
    const handleLogin = (e) => {
        e.preventDefault(); // sennò viene aggiornata la pagina e perdo i dati

        if (username !== "" && password !== "") {
            Axios.post("http://localhost:8080/login", {
                username,
                password
            })
                .then((response) => {
                    if (response.status === 200) {
                        localStorage.setItem("userData", JSON.stringify(response.data));
                        setLoginStatus(response.data.username);
                        window.location.href = "/"; // altrimenti dopo aver fatto il login, il NavLink "Accedi" non si aggiorna a "Logout"
                    }
                })
                .catch((err) => {
                    if (err) {
                        setError(true);
                    }
                });
        }
    };

    return (
        <div className="login">
            <form className="login-form">
                <h1 style={{color: 'black'}}>Bentornato!</h1>
                <p style={{display: error ? 'block' : 'none', color: 'red'}}>Si è verificato un errore</p>

                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    value={username}
                    placeholder="Username"
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    value={password}
                    placeholder="Password"
                    required
                />

                <button type="submit" onClick={handleLogin}>Login</button>

                <p>Non hai ancora un account? <Link to="/signup" style={{color: 'black'}}>Registrati</Link></p>

            </form>
        </div>
    );
};

export default Login;