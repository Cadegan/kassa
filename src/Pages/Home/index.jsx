import React from "react";
import imgBanner from "../../assets/home-banner.jpg";
import { useState, useEffect } from "react";
import Card from "../../components/Card/index";

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  return (
    <section className="homeSection">
      <div className="homeBanner">
        <img src={imgBanner} alt="Bannière entête"></img>
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <div className="homeCardSection">
        {loading && (
          <div className="loadingMessage">
            Chargement. Un moment s'il vous plait
          </div>
        )}
        {error && (
          <div className="errorMessage">
            {`Erreur de chargement des données ${error}`}
          </div>
        )}
        <div className="gridCardsContainer">
          {data &&
            data.map(({ id, title, picture }) => (
              <Card id={id} key={id} title={title} picture={picture}></Card>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
