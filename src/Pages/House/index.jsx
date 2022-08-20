import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function House() {
  const { id } = useParams();
  const [detail, setDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      await fetch("/logements.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .catch((err) => console.log(err))
        .then((myJson) => {
          let appartment = myJson.find((app) => app.id === id);
          appartment ? setDetails(appartment) : navigate("/*");
        });
    };
    getData();
  }, [detail, id, navigate]);

  return detail ? (
    <div className="logement">
      <div className="carrousel">Carrousel</div>
      <div className="titles">
        <h1>{detail.title}</h1>
        <h2>{detail.location}</h2>
      </div>

      <div className="host">
        <p className="name">{detail.host.name}</p>
        <img src={detail.host.picture} alt={detail.host.name} />
        <div className="rating">{detail.rating}</div>
      </div>
      <section className="content">
        <div className="tags">{detail.tags}</div>
        <div className="description">{detail.description}</div>
        <div className="equipments">{detail.equipments}</div>
      </section>
    </div>
  ) : null;
}

export default House;
