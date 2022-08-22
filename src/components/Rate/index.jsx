// import React from "react";
import blankStar from "../../assets/star-blank.svg";
import filledStar from "../../assets/star-filled.svg";
// import "./Logement.sass";

const BlankStarResult = () => (
  <img src={blankStar} alt="blankStar" className="blankStar" />
);

const FilledStarResult = () => (
  <img src={filledStar} alt="filledStar" className="filledStar" />
);

const RatingScale = ({ stars }) => {
  let starsArray = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {starsArray.map((i) =>
        i <= stars ? <FilledStarResult key={i} /> : <BlankStarResult key={i} />
      )}
    </div>
  );
};

export default RatingScale;
