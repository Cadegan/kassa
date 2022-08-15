function Card(props) {
  const { id, title, cover } = props;

  return (
    <article className="card" key={id}>
      <p className="card-title"></p>
      <img className="card-picture" scr={cover} alt={`${title}`} />
    </article>
  );
}

export default Card;
