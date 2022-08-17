import { Link } from "react-router-dom";

function Card(props) {
  const { id, title, cover } = props;

  return (
    <article className="card" key={id}>
      <Link to={`/housing/${id}`} style={{ backgroundImage: `url(${cover})` }}>
        <p className="cardTitle">{title}</p>
      </Link>
    </article>
  );
}

export default Card;
