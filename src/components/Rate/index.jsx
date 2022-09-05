import blankStar from "../../assets/star-blank.svg";
import filledStar from "../../assets/star-filled.svg";

const BlankStar = () => (
  <img src={blankStar} alt="blankStar" className="blankStar" />
);

const FilledStar = () => (
  <img src={filledStar} alt="filledStar" className="filledStar" />
);

const RatingScale = ({ stars }) => {
  let starsArray = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {starsArray.map((i) =>
        i <= stars ? (
          <span key={i}>
            <FilledStar />
          </span>
        ) : (
          <span key={i}>
            <BlankStar />
          </span>
        )
      )}
    </div>
  );
};

export default RatingScale;
