"use strict";
import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import Axios from "axios";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [seller, setSeller] = useState(false);

    const history = useHistory();

    // Funzione che gestisce la registrazione di un nuovo utente
    const handleSignUp = (e) => {
        e.preventDefault(); // sennò viene aggiornata la pagina e perdo i dati

        if (username !== "" && name !== "" && email !== "" && number !== "" && password !== "") {
            Axios.post("http://localhost:8080/signup", {
                username,
                name,
                email,
                number,
                password,
                seller,
            })
                .then((response) => {
                    if (response.status === 201) {
                        history.push("/login");
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
        <div className="signup">
            <form onSubmit={handleSignUp} className="signup-form">
                <h1 style={{color: 'black'}}>Registrati</h1>
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

                <label htmlFor="name">Nome</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    value={name}
                    placeholder="Nome"
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    value={email}
                    placeholder="Email"
                    required
                />

                <label htmlFor="number">Numero di telefono</label>
                <input
                    type="text"
                    id="number"
                    name="number"
                    onChange={(e) => {
                        setNumber(e.target.value);
                    }}
                    value={number}
                    placeholder="Numero di telefono"
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

                <input
                    type="checkbox"
                    onChange={() => {
                        setSeller(!seller);
                    }}
                    value={seller}
                    style={{marginRight: '2em'}}
                />
                <label htmlFor="seller">Sei un venditore?</label>

                <button type="submit">Sign Up</button>

                <p>Hai già un account? <Link to="/login" style={{color: 'black'}}>Accedi</Link>
                </p>
            </form>
        </div>
    );
};

export default SignUp;