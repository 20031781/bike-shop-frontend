// "use strict" is unnecessary inside of modules
import React from "react";
import Bike from "./Bike";

const BikeList = ({
                      bikes,
                      setBikes,
                      handleEditClick,
                      handleDeleteClick
                  }) => (
    <div className="bike-list">
        {!bikes || (bikes.length === 0 && <p>Non ci sono moto da vendere.</p>)}
        {bikes && bikes.map((bike) => ( // viene eseguita su ogni elemento dell' array
            <Bike
                key={bike.id}
                bike={bike}
                bikes={bikes}
                setBikes={setBikes}
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteClick}
            />
        ))}
    </div>
);

export default BikeList;