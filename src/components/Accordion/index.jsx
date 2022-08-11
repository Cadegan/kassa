import { useState } from "react"
import arrow from "../../assets/arrow.svg"


const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                {isActive ? <img src={arrow} alt="arrow" className="arrow-down"></img> 
                :  <img src={arrow} alt="arrow" className="arrow-up"></img>}
            </div>
            {isActive && <div className="accordion-content">{content}</div>}
        </div>
    )
}

export default Accordion;