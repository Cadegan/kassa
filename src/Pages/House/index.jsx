import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Accordion from "../../components/Accordion/index";
import Tag from "../../components/Tag/index";
import Rating from "../../components/Rate/index";
import SplitText from "../../components/Split";
import Carousel from "../../components/Carousel";
import Error from "../../components/Error/index";

function House() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  //   v2
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/logements.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .catch((err) => {
          console.log(err);
        });
      setData(response);
    };

    getData();
  }, []);

  if (data) {
    let appartment = data.find((e) => e.id === id);

    return appartment ? (
      <div className="logement">
        <Carousel slides={appartment.pictures}></Carousel>
        <section className="globalInformations">
          <div className="primaryInformations">
            <div className="houseTitles">
              <h1 className="title">{appartment.title}</h1>
              <h2 className="location">{appartment.location}</h2>
            </div>
            <Tag tags={appartment.tags}></Tag>
          </div>
          <div className="secondaryInformations">
            <div className="host">
              <SplitText textToSplit={appartment.host.name}></SplitText>
              <div className="hostPicture">
                <img src={appartment.host.picture} alt={appartment.host.name} />
              </div>
            </div>
            <Rating stars={appartment.rating}></Rating>
          </div>
        </section>
        <section className="content">
          <div className="description">
            <Accordion
              title="Description"
              content={appartment.description}
            ></Accordion>
          </div>
          <div className="equipments">
            <Accordion
              title="Équipments"
              content={
                appartment.equipments &&
                appartment.equipments.map((content, index) => (
                  <li key={index}>{content}</li>
                ))
              }
            ></Accordion>
          </div>
        </section>
      </div>
    ) : (
      <Error />
    );
  }
}

export default House;
