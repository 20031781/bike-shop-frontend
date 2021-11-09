"use strict";
import React from 'react';

const Footer = () => (
    <footer className="footer-home">
        <p>
            Questo sito è stato realizzato da{" "}
            {/* target="_blank" per aprire in una nuova finestra */}
            <a target="_blank" href="https://www.instagram.com/loreappe/">
                <span style={{color: 'black'}}>
                    <u>Lorenzo</u>
                </span>
            </a>
            <br/>2021. Tutti i diritti riservati.
        </p>
    </footer>
);

export default Footer;
