//Split function

const SplitText = ({ textTosplit }) => {
  return (
    <div className="hostName">
      {textTosplit.split(" ").map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default SplitText;
