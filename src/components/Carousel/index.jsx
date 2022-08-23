import { useState } from "react";
import arrow from "../../assets/arrow.svg";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  /* v2 */
  return (
    <div
      className="caroussel"
      style={{ backgroundImage: `url(${slides[current]})` }}
    >
      {/* <img src={slides[current]} alt={slides[current]}></img> */}
      <div className="carousselNavigation">
        {length > 1 ? (
          <div className="prevBoutton" onClick={prevSlide}>
            <img src={arrow} alt="arrow" className="prevArrow"></img>
          </div>
        ) : null}
        {length > 1 ? (
          <div className="nextBoutton" onClick={nextSlide}>
            <img src={arrow} alt="arrow" className="nextArrow"></img>
          </div>
        ) : null}
      </div>
      <span className="slidePosition">
        {current + 1}/{length}
      </span>
    </div>
  );
};

export default Carousel;
