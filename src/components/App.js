import React, { useEffect, useState } from "react";

import "../styles/App.css";
import fetchStats from "../functions/fetchStats";
import Country from "./Country";
function App() {
  const refreschtime = 10; // time in minutes
  const [data = [], setData] = useState();
  const [date, setDate] = useState();
  const [refresh, setRefresh] = useState(1000 * 60 * refreschtime);
  const [timeoutIndex, setTimeoutIndex] = useState();
  useEffect(() => {
    // initial data fetch
    fetchStats().then(data => {
      const filtered = data.filter(item => item.country === "Poland");
      setData(filtered);
    });
    //set Date
    const date = new Date().toLocaleDateString();
    setDate(date);
    //Set interwal of refresching data
    const timeoutIndex = setInterval(() => {
      //fetching data
      fetchStats().then(data => {
        const filtered = data.filter(item => item.country === "Poland");
        setData(filtered);
      });
      //set Date
      const date = new Date().toLocaleDateString();
      setDate(date);
    }, refresh);
    // set timeout index
    setTimeoutIndex(timeoutIndex);
  }, []);
  const countries = data.map(item => (
    <Country data={item} key={item.country} />
  ));

  return (
    <div className="main-container">
      <h1 className="main__tittle">SARS-CoV-2 w Polsce</h1>
      <p className="sub__tittle"> stan na dzień : {date}</p>
      {countries}
      <div className="icons__info">
        Icons made by
        <a
          href="https://www.flaticon.com/authors/vectors-market"
          title="Vectors Market"
        >
          Vectors Market
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
}

export default App;
