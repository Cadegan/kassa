// import React from "react";
import blankStar from "../../assets/star-blank.svg";
import filledStar from "../../assets/star-filled.svg";
// import "./Logement.sass";

const BlankStarResult = () => (
  <img img src={blankStar} alt="blankStar" className="blankStar"></img>
);

const FilledStarResult = () => (
  <img img src={filledStar} alt="filledStar" className="filledStar"></img>
);

const RatingScale = ({ stars }) => {
  let starsArray = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {starsArray.map((i) =>
        i <= stars ? (
          <FilledStarResult key={i.toString()} />
        ) : (
          <BlankStarResult key={i.toString()} />
        )
      )}
    </div>
  );
};

export default RatingScale;
