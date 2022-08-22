const Tag = ({ tags }) => {
  return (
    <div className="tagsGroup">
      {tags.map((tag, key) => (
        <li className="tag" key={key}>
          {tag}
        </li>
      ))}
    </div>
  );
};

export default Tag;
