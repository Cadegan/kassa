const SplitText = ({ textToSplit }) => {
  return (
    <div className="hostName">
      {textToSplit.split(" ").map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default SplitText;

/* Version alternative */
// const SplitText = ({ textToSplit }) => {
//   return (
//     <div className="hostName">
//       <p>{textToSplit.split(" ")[0]}</p>
//       <p>{textToSplit.split(" ")[1]}</p>
//     </div>
//   );
// };

// export default SplitText;
