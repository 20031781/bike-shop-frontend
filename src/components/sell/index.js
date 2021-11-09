// "use strict" is unnecessary inside of modules
import React, {useEffect, useState} from "react";
import Axios from "axios";
import BikeForm from "./BikeForm";
import BikeList from "./BikeList";
import EditBike from "./EditBike";

const SellBike = () => {
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [displacement, setDisplacement] = useState("");
    const [times, setTimes] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");

    const [bikes, setBikes] = useState([]);

    const [isEditing, setIsEditing] = useState(false);
    const [currentBike, setCurrentBike] = useState({});
    const [error, setError] = useState(false);

    // Chiede le moto con Axios e le inserisce nel localStorage per visualizzarle
    const syncOffers = () => {
        Axios.get("http://localhost:8080/api/bikes")
            .then((response) => {
                setBikes(response.data);
                localStorage.setItem("bikes", JSON.stringify(response.data));
            });
    };

    // useEffect ha come secondo parametro un array vuoto per indicare alla funzione di venir eseguita solo una volta, al caricamento del componente
    useEffect(syncOffers, []);

    // Gestisce la situazione conseguente all' invio del form
    const handleAddFormSubmit = (e) => {
        e.preventDefault(); // sennò viene aggiornata la pagina e perdo i dati

        if (brand !== "" && model !== "" && displacement !== "" && times !== "" && category !== "" && price !== "") {
            Axios.post("http://localhost:8080/api/bikes", {
                brand,
                model,
                displacement,
                times,
                category,
                price,
            })
                .then((response) => {
                    setBikes([...bikes,
                        {
                            id: response.data.id,
                            brand: response.data.brand,
                            model: response.data.model,
                            displacement: response.data.displacement,
                            times: response.data.times,
                            category: response.data.category,
                            price: response.data.price
                        }
                    ]);
                    // Svuoto i campi del form
                    setBrand("");
                    setModel("");
                    setDisplacement("");
                    setTimes("");
                    setCategory("");
                    setPrice("");

                })
                .catch(() => { // se intercetta un errore qualsiasi allora setto error a true per poterlo visualizzare nel BikeForm
                    setError(true);
                });
        }
    };

    // Svuota i campi del form
    const handleClose = (e) => {
        e.preventDefault();
        setBrand("");
        setModel("");
        setDisplacement("");
        setTimes("");
        setCategory("");
        setPrice("");
    };

    // Assegna il valore presente nel form all' interno della variabile corrispondente
    const handleBrandChange = (e) => {
        setBrand(e.target.value);
    }

    // Assegna il valore presente nel form all' interno della variabile corrispondente
    const handleModelChange = (e) => {
        setModel(e.target.value);
    };

    // Assegna il valore presente nel form all' interno della variabile corrispondente
    const handleDisplacementChange = (e) => {
        setDisplacement(e.target.value);
    };

    // Assegna il valore presente nel form all' interno della variabile corrispondente
    const handleTimesChange = (e) => {
        setTimes(e.target.value);
    };

    // Assegna il valore presente nel form all' interno della variabile corrispondente
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    // Assegna il valore presente nel form all' interno della variabile corrispondente
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    // Gestisce la modifica del prezzo di una moto. Setta a true isEditing e assegna la moto corrente
    const handleEditClick = (bike) => {
        setIsEditing(true);
        setCurrentBike(bike); // {...bike}
    };

    // Gestisce la cancellazione di una moto dal database. Dopo averla cancellata chiama {@link syncOffers}
    const handleDeleteClick = (id) => {
        if (window.confirm("Sei sicuro di cancella questa moto?")) {
            Axios.delete(`http://localhost:8080/api/bikes/${id}`)
                .then((response) => {
                    if (response.status === 200) {
                        syncOffers();
                    }
                });
        }
    };

    // Assegna il prezzo che l'utente sta scrivendo al campo (prezzo) della moto corrente
    const handleEditInputChange = (e) => {
        setCurrentBike({
            ...currentBike, // ...currentBike => tutte le proprietà di currentBike uguali ma sovrascrivo il prezzo
            price: e.target.value
        });
    };

    // Gestisce la situazione conseguente all' invio del form di modifica del prezzo e sincronizza le offerte
    const handleEditFormSubmit = () => {
        Axios.put(`http://localhost:8080/api/bikes/${currentBike.id}`, currentBike)
            .then((response) => {
                if (response.status === 200) {
                    syncOffers();
                    setIsEditing(false);
                }
            });
    };

    return (
        <div className="sell">
            <h1>Benvenuto al Bike Shop!</h1>
            <BikeForm
                onAddFormSubmit={handleAddFormSubmit}
                onClose={handleClose}

                bike={brand}
                model={model}
                displacement={displacement}
                times={times}
                category={category}
                price={price}

                error={error}

                onBrandChange={handleBrandChange}
                onModelChange={handleModelChange}
                onDisplacementChange={handleDisplacementChange}
                onTimesChange={handleTimesChange}
                onCategoryChange={handleCategoryChange}
                onPriceChange={handlePriceChange}
            />

            {/* Visualizzo la lista delle moto presenti (nel DB) */}
            <p>Moto da vendere: {bikes.length}</p>
            <BikeList
                bikes={bikes}
                setBikes={setBikes}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
            />

            {/* Se isEditing è true allora sto cercando di modificare il prezzo di una moto */}
            {isEditing && (
                <> {/* Frammenti, consentono di raggruppare una lista di figli senza aggiungere nodi extra al DOM */}
                    <EditBike
                        currentBike={currentBike}
                        setIsEditing={setIsEditing}
                        onEditInputChange={handleEditInputChange}
                        onEditFormSubmit={handleEditFormSubmit}
                    />
                    <div className="modal-bg"/>
                </>
            )}
        </div>
    );
};

export default SellBike;