import { Link } from "react-router-dom";

function Card(props) {
  const { id, title, image } = props;

  return (
    <article className="card" key={id}>
      <Link to={`/housing/${id}`} style={{ backgroundImage: `url(${image})` }}>
        {/* <img className="cardPicture" src={image} alt={title} /> */}
        <p className="cardTitle">{title}</p>
      </Link>
    </article>
  );
}

export default Card;
