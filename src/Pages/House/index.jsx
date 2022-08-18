import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function House() {
  const { id } = useParams;
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("/logements.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(` - Error status ${response.status}`);
        }
        let houseData = await response.json();
        let houseSelected = houseData.find((e) => e.id === id);
        if (houseSelected) {
          setData(houseSelected);
          setError(null);
        }
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [data, id]);
}

// export default House;

// function Home() {
//   const [data, setData] = useState(null);
//   const [isLoading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   //   v2
//   useEffect(() => {
//     async function getData() {
//       try {
//         const response = await fetch("/logements.json", {
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//         });

//         if (!response.ok) {
//           throw new Error(` - Error status ${response.status}`);
//         }
//         let actualData = await response.json();
//         setData(actualData);
//         setError(null);
//       } catch (err) {
//         setError(err.message);
//         setData(null);
//       } finally {
//         setLoading(false);
//       }
//     }
//     getData();
//   }, []);

//   return (
//     <section className="homeSection">
//       <div className="homeBanner">
//         <img src={imgBanner} alt="Bannière entête"></img>
//         <p>Chez vous, partout et ailleurs</p>
//       </div>
//       <div className="homeCardSection">
//         {isLoading && <Loader />}
//         {error && (
//           <div className="errorMessage">
//             {`Erreur de chargement des données ${error}`}
//           </div>
//         )}
//         <div className="cardsContainer">
//           {data &&
//             data.map(({ id, title, cover }) => (
//               <Card id={id} key={id} title={title} cover={cover}></Card>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// }
