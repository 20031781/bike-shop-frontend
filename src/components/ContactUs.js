"use strict";
import React from "react";

const ContactUs = () => (
    <div className="about">
        <div>
            <h1>Contattaci</h1>
            <p>Siamo lieti di ricevere feedback e richieste sui nostri prodotti.</p>
            <form className="about-form">
                <fieldset>
                    <legend>Compila il form</legend>

                    <label htmlFor="fname">Nome</label>
                    <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Il tuo nome"
                        required
                    />

                    <label htmlFor="lname">Cognome</label>
                    <input
                        type="text"
                        id="lname"
                        name="lastname"
                        placeholder="Il tuo cognome"
                        required
                    />

                    <label htmlFor="topic">Topic</label>
                    <select id="topic" name="topic">
                        <option value="feedback">Feedback</option>
                        <option value="request">Richiesta</option>
                        <option value="general">Generale</option>
                    </select>

                    <label htmlFor="subject">Oggetto</label>
                    <textarea
                        id="subject"
                        name="subject"
                        placeholder="Scrivere qui"
                        style={{height: "130px"}}
                        required
                    />

                    <input type="checkbox"
                           name="product-list"
                           title="Se il tuo nome e cognome corrispondono con un utente esistente, riceverai una email con i prodotti."/>
                    {" "}Richiedi l'elenco dei prodotti

                    <input type="submit" value="INVIA"/>
                </fieldset>
            </form>
        </div>
    </div>
);

export default ContactUs;