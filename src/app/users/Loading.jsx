import React from 'react'
import "./css/loading.css";
export default function Loading () {
  return (
        <>
            <div className="spinnerContainer">
            <div className="spinner"></div>
            <div className="loader">
                <p>Cargando</p>
                <div className="words">
                <span className="word">peliculas</span>
                <span className="word">movies</span>
                <span className="word">фильмы</span>
                <span className="word">映画</span>
                <span className="word">filme</span>
                </div>
            </div>
            </div>
        </>
  )
}
