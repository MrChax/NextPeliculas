import React from 'react'
import "./css/loading.css";


export default function Loading () {
  return (
        <div style={{width: "100%", position: "fixed", height: "100%", display: "flex", justifyContent:'center', alignItems:'center', background: 'linear-gradient(to bottom, #0a0a0a, #292929)'}}>
            <div className="spinnerContainer">
            <div className="spinner"></div>
            <div className="loader">
                <p style={{color: '#fff'}}>Cargando</p>
                <div className="words">
                <span className="word"></span>
                <span className="word">peliculas</span>
                <span className="word">movies</span>
                <span className="word">фильмы</span>
                <span className="word">映画</span>
                </div>
            </div>
            </div>
        </div>
  )
}
