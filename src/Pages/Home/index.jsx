import React from "react";
import imgBanner from "../../assets/home-banner.jpg";
import { useState, useEffect } from "react";
import Card from "../../components/Card/index";

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const reponse = await fetch();
        if (!reponse.ok) {
          throw new Error(`HTTP error: ${reponse.status}`);
        }
        let actualdata = await reponse.json;
        setData(actualdata);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

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
