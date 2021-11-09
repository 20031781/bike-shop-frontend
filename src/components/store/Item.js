"use strict";
import React from "react";
import Axios from "axios";

const Item = ({
                  bike,
                  setBikes,
                  loginStatus
              }) => {
    // Sincronizza le offerte chiedendole al DB e settandole nel localStorage
    const syncBikes = async () => {
        const res = await Axios.get("http://localhost:8080/api/bikes");
        setBikes(res.data);
        localStorage.setItem("bikes", JSON.stringify(res.data));
    };

    // Funzione che si occupa dell'acquisto della moto
    const handleSellFunction = () => {
        if (window.confirm("Stai comprando questa moto, sei sicuro?")) {
            Axios.delete(`http://localhost:8080/api/bikes/${bike.id}`)
                .then((response) => {
                    if (response.status === 200) {
                        syncBikes()
                            .catch((error) => {
                                console.log(error);
                            });
                    }
                });
        }
    };

    // Funzione che si occupa del noleggio
    const handleRentFunction = () => {
        let rentedBike = bike;
        rentedBike.rented = true;

        Axios.put(`http://localhost:8080/api/bikes/${rentedBike.id}`, rentedBike)
            .then((response) => {
                if (response.status === 200) {
                    syncBikes()
                        .catch((error) => {
                            console.log(error);
                        });
                }
            });
    };

    // Funzione che si occupa della restituzione della moto
    const handleUnrentFunction = () => {
        let unrentedBike = bike;
        unrentedBike.rented = false;

        Axios.put(`http://localhost:8080/api/bikes/${unrentedBike.id}`, unrentedBike)
            .then((response) => {
                if (response.status === 200) {
                    syncBikes()
                        .catch((error) => {
                            console.log(error);
                        });
                }
            });
    };

    return (
        <>
            <div className="bike-card">
                <div className="bike-content">

                    <h3>{bike.brand} <span>{bike.model}</span></h3>

                    <p><i>Categoria: {bike.category}</i></p>

                    <img src={"img/pics/3.png"} alt={bike.brand} width="100%"/>

                    <p><b>Cilindrata: </b>{bike.displacement}cc</p>

                    <p><b>Tempi: </b>{bike.times}</p>

                    <p><b>Prezzo: </b>{bike.price} €</p>
                </div>

                {!bike.rented && loginStatus !== "" && (
                    <div className="bike-buttons">
                        <button type="button" onClick={handleSellFunction}>Compra</button>
                        <button type="button" onClick={handleRentFunction}>Noleggia</button>
                    </div>
                )}

                {bike.rented && loginStatus !== "" && (
                    <div className="bike-buttons">
                        <button type="button" onClick={handleUnrentFunction}>Restituisci</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Item;