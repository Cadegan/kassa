/*Split function*/

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

/* Version alternative */
// const SplitText = ({ textTosplit }) => {
//   return (
//     <div className="hostName">
//       <p>{textTosplit.split(" ")[0]}</p>
//       <p>{textTosplit.split(" ")[1]}</p>
//     </div>
//   );
// };

// export default SplitText;
