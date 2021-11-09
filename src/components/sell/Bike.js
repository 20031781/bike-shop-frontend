// "use strict" is unnecessary inside of modules
import React from "react";

const Bike = ({
                  bike,
                  onEditClick,
                  onDeleteClick
              }) => (
    <div className="bike-card">
        <div className="bike-content">

            <h3>{bike.brand} <span>{bike.model}</span></h3>

            <p><i>Categoria: {bike.category}</i></p>

            <img src={"/img/pics/3.png"} alt={bike.brand} width="100%"/>

            <p><b>Cilindrata: </b>{bike.displacement}cc</p>

            <p><b>Tempi: </b>{bike.times}</p>

            <p><b>Prezzo: </b>{bike.price} €</p>
        </div>

        <div className="bike-buttons">
            <button type="button" onClick={() => onEditClick(bike)}>
                <abbr title="Modifica">
                    <img src={"/img/icons/edit-pencil.svg"} alt="edit" className="icons"/>
                </abbr>
            </button>

            <button type="button" onClick={() => onDeleteClick(bike.id)} className="">
                <abbr title="Elimina">
                    <img src={"/img/icons/trash.svg"} alt="delete" className="icons"/>
                </abbr>
            </button>
        </div>

    </div>
);

export default Bike;