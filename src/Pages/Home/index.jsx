import React from "react";
import imgBanner from "../../assets/home-banner.jpg";
import { useState, useEffect } from "react";
import Card from "../../components/Card/index";
import Loader from "../../components/Loader/index";

function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   v2
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("/logements.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        // const response = await fetch(
        //   "https://fakestoreapi.com/products?_limit=10",
        //   {
        //     headers: {
        //       "Content-Type": "application/json",
        //       Accept: "application/json",
        //     },
        //   }
        // );
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

  /////

  //   Simplified version
  //   const getData = async () => {
  //     const response = await fetch("./data/logements.json", {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     })
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     setData(response);
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  return (
    <section className="homeSection">
      <div className="homeBanner">
        <img src={imgBanner} alt="Bannière entête"></img>
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <div className="homeCardSection">
        {isLoading && <Loader />}
        {error && (
          <div className="errorMessage">
            {`Erreur de chargement des données ${error}`}
          </div>
        )}
        <div className="cardsContainer">
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
