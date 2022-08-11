import { useState } from "react"
import arrow from "../../assets/arrow.svg"
import logoKasa from "../../assets/logo.svg";


const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? <img src={arrow} alt="arrow" className="arrow-down"></img> 
                :  <img src={arrow} alt="arrow" className="arrow-up"></img>}
                </div>
            </div>
            <div>
                {isActive && <div className="accordion-content">{content}</div>}
            </div>
        </div>
    )
}

export default Accordion;