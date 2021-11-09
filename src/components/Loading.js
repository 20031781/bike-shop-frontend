import React from 'react';
import Loader from 'react-loader-spinner';

// Componente che permette di visualizzare l'effetto di caricamento
export default function Loading() {
  return (
    <Loader
      type="TailSpin"
      alt="Loading..."
      color="#00000059"
      height={70}
      width={70}
      className="loader"
    />
  );
}
