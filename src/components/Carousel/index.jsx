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
    <div className="caroussel">
      <div
        className="currentSlide"
        style={{ backgroundImage: `url(${slides[current]})` }}
      ></div>
      {/* <img src={slides[current]} alt={slides[current]}></img> */}
      <span className="slidePosition">
        {current + 1}/{length}
      </span>
      {length > 1 ? (
        <div className="carousselNavigation">
          <div className="prevBoutton" onClick={prevSlide}>
            <img src={arrow} alt="arrow" className="prevArrow"></img>
          </div>
          <div className="nextBoutton" onClick={nextSlide}>
            <img src={arrow} alt="arrow" className="nextArrow"></img>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Carousel;
