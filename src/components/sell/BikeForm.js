// "use strict" is unnecessary inside of modules
import React from "react";

const BikeForm = ({
                      onAddFormSubmit,

                      brand,
                      model,
                      displacement,
                      times,
                      category,
                      price,

                      error,

                      onBrandChange,
                      onModelChange,
                      onDisplacementChange,
                      onTimesChange,
                      onCategoryChange,
                      onPriceChange
                  }) => (
    <form onSubmit={onAddFormSubmit} className="bike-form">
        {error && <p style={{color: "red"}}>Errore generico del database</p>}
        <fieldset>
            <legend>Vendi una moto</legend>
            <label htmlFor="brand">Brand</label>
            <input
                type="text"
                id="brand"
                name="brand"
                onChange={onBrandChange}
                value={brand}
                placeholder="Aggiungi il brand"
                required
            />

            <label htmlFor="model">Modello</label>
            <input
                type="text"
                id="model"
                name="model"
                onChange={onModelChange}
                value={model}
                placeholder="Aggiungi il modello"
                required
            />

            <label htmlFor="displacement">Cilindrata (cc)</label>
            <input
                type="text"
                id="displacement"
                name="displacement"
                onChange={onDisplacementChange}
                value={displacement}
                placeholder="Aggiungi la cilindrata"
                required
            />

            <label htmlFor="times">Tempi</label>
            <select
                id="times"
                name="times"
                onChange={onTimesChange}
                value={times}
            >
                <option value="" disabled hidden>Scegli</option>
                <option value="2">2</option>
                <option value="4">4</option>
            </select>

            <label htmlFor="category">Categoria</label>
            <input
                type="text"
                id="category"
                name="category"
                onChange={onCategoryChange}
                value={category}
                placeholder="Aggiungi la categoria"
                required
            />

            <label htmlFor="price">Prezzo</label>
            <input
                type="text"
                id="price"
                name="price"
                onChange={onPriceChange}
                value={price}
                placeholder="Aggiungi il prezzo"
                required
            />

            <input type="submit" value="AGGIUNGI LA MOTO"/>
        </fieldset>
    </form>
);

export default BikeForm;