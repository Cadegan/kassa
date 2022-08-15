import React from "react";
import imgBanner from "../../assets/home-banner.jpg";
import { useState, useEffect } from "react";
import Card from "../../components/Card/index";
// const response = await fetch("../src/data/logements.json");

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("./data/logements.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(` - Error status ${response.status}`);
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }
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
            data.map(({ id, title, cover }) => (
              <Card id={id} key={id} title={title} cover={cover}></Card>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
