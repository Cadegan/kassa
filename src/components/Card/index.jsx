import { Link } from "react-router-dom";

function Card(props) {
  const { id, title, image } = props;

  return (
    <article className="card" key={id}>
      <Link to={`/housing/${id}`}>
        <p className="cardTitle">{title}</p>
        <img className="cardPicture" src={image} alt={title} />
      </Link>
    </article>
  );
}

export default Card;
