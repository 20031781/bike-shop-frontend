"use strict";
import React, {useEffect, useState} from "react";
import Item from "./Item";

const StoreList = ({
                       bikes,
                       setBikes,
                       searchBike
                   }) => {
    const [isSearching, setIsSearching] = useState(() => searchBike.length > 0);
    const [loginStatus] = useState(() => {
        const user = localStorage.getItem("userData");
        if (user) {
            return JSON.parse(user);
        }
        return "";
    });

    // Rende possibile la visualizzazione della moto che si sta cercando
    useEffect(() => {
        if (searchBike && searchBike.length > 0) {
            setIsSearching(true);
        } else {
            setIsSearching(false);
        }
    }, [searchBike]);

    return (
        <div className="store-list">
            {!bikes || (bikes.length === 0 && <p>Non ci sono moto da vendere o noleggiare.</p>)}

            {bikes && !isSearching && bikes.map((bike) => (
                <Item key={bike.id} bike={bike} bikes={bikes} setBikes={setBikes} loginStatus={loginStatus}/>
            ))}

            {bikes && isSearching && bikes.filter(bike =>
                bike.brand.toLowerCase()
                    .includes(searchBike.toLowerCase())).map((bike) => (
                <Item key={bike.id} bike={bike} bikes={bikes} setBikes={setBikes} loginStatus={loginStatus}/>
            ))}
        </div>
    );
};

export default StoreList;