import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Accordion from "../../components/Accordion/index";
import Tag from "../../components/Tag/index";
import Rating from "../../components/Rate/index";
import SplitText from "../../components/Split";

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
        .then((jsonResponse) => {
          let appartment = jsonResponse.find((e) => e.id === id);
          appartment ? setDetails(appartment) : navigate("/*");
        });
    };
    getData();
  }, [detail, id, navigate]);

  return detail ? (
    <div className="logement">
      <div className="carrousel">Carrousel</div>
      <section className="globalInformations">
        <div className="primaryInformations">
          <div className="houseTitles">
            <h1 className="title">{detail.title}</h1>
            <h2 className="location">{detail.location}</h2>
          </div>
          <Tag tags={detail.tags}></Tag>
        </div>
        <div className="secondaryInformations">
          <div className="host">
            <SplitText textToSplit={detail.host.name}></SplitText>
            <div className="hostPicture">
              <img src={detail.host.picture} alt={detail.host.name} />
            </div>
          </div>
          <Rating stars={detail.rating}></Rating>
        </div>
      </section>
      <section className="content">
        <div className="description">
          <Accordion
            title="Description"
            content={detail.description}
          ></Accordion>
        </div>
        <div className="equipments">
          <Accordion
            title="Équipments"
            content={
              detail.equipments &&
              detail.equipments.map((content, index) => (
                <li key={index}>{content}</li>
              ))
            }
          ></Accordion>
        </div>
      </section>
    </div>
  ) : null;
}

export default House;
