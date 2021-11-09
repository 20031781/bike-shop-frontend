"use strict";
import React, {useEffect, useState} from "react";
import Axios from "axios";
import StoreList from "./StoreList";
import Searchbar from "./Searchbar";

const Store = () => {
    const [bikes, setBikes] = useState([]);
    const [searchBike, setSearchBike] = useState("");

    // Sincronizza le offerte chiedendole al DB e settandole nel localStorage
    useEffect(() => {
        Axios.get("http://localhost:8080/api/bikes")
            .then((response) => {
                setBikes(response.data);
                localStorage.setItem("bikes", JSON.stringify(response.data));
            });
    }, []);

    // Svuota il campo searchBike
    const resetSearch = () => {
        setSearchBike("");
    };

    const handleChange = (event) => {
      setSearchBike(event.target.value);
    };

    return (
        <div className="store">
            <h1>Bike Store</h1>
            <p>Noleggia o acquista una moto!</p>
            <Searchbar
                value={searchBike}
                setValue={setSearchBike}
                clearText={resetSearch}
                handleChange={handleChange}
            />
            <StoreList bikes={bikes} setBikes={setBikes} searchBike={searchBike}/>
        </div>
    );
};

export default Store;