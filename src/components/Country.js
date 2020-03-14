import React from "react";
import "../styles/country.css";
export default function Country({ data }) {
  // console.log(data);

  return (
    <div className="country_container">
      <div className="row-column">
        <h2 className="tittle"> Statystyki Całkowite</h2>
        <div className="row">
          <div className="item">
            <h2>Chorzy</h2>
            <p className="stats">{data.cases}</p>
          </div>
          <div className="item">
            <h2>Zgony</h2>
            <p className="stats">{data.deaths}</p>
          </div>
          <div className="item">
            <h2>Stan Krytyczny</h2>
            <p className="stats">{data.critical}</p>
          </div>
          <div className="item">
            <h2>Wyzdrowienia</h2>
            <p className="stats">{data.recovered}</p>
          </div>
        </div>
      </div>
      <div className="row row-column">
        <h2 className="tittle">Dzisiaj</h2>
        <div className="row">
          <div className="item">
            <h2>Zachorowania</h2>
            <p className="stats">{data.todayCases}</p>
          </div>
          <div className="item">
            <h2>Zgony</h2>
            <p className="stats">{data.todayDeaths}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
