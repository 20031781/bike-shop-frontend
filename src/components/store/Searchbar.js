"use strict";
import React from "react";

const SearchBar = ({
                       value,
                       clearText,
                       handleChange
                   }) => (
    <div className="searchbar">
        <input
            type="text"
            value={value}
            aria-label="Cerca nell'elenco per articolo"
            onChange={handleChange}
            placeholder="Cerca una moto..."
        />

        {value && (
            <button type="reset" onClick={clearText} style={{color: "white"}}>Reset</button>
        )}
    </div>
);

export default SearchBar;