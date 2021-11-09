// "use strict" is unnecessary inside of modules
import React from "react";

const EditBike = ({
                      currentBike,
                      setIsEditing,
                      onEditInputChange,
                      onEditFormSubmit,
                  }) => (
    <form onSubmit={onEditFormSubmit} className="edit-form"> {/* <form className="edit-form"> */}

        <fieldset>
            <legend>Aggiorna il prezzo</legend>
            <input
                name="editBike"
                type="text"
                aria-label="edit bike"
                value={currentBike.price}
                onChange={onEditInputChange}
            />
        </fieldset>

        <div className="bike-buttons">
            <button type="submit" onClick={onEditFormSubmit}>Aggiorna</button>
            <button type="button" onClick={() => setIsEditing(false)}>Cancella</button>
        </div>
    </form>
);

export default EditBike;