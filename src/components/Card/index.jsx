function Card(props) {
  const { id, title, picture } = props;

  return (
    <article className="card" key={id}>
      <p className="card-title"></p>
      <img className="card-picture" scr={picture} alt={`${title}`} />
    </article>
  );
}

export default Card;
