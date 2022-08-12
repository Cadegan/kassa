import React from 'react';
import Accordion from '../../components/Accordion/index';
import accordionData from '../../data/accordionData';
import imgBanner from "../../assets/about-banner.jpg"

function About () {
    return (
        <div className="aboutSection">
            <div className='aboutBanner'>
                    <img src={imgBanner} alt="Bannière entête"></img>
            </div>
            <div className='accordion'>
                {accordionData.map(({title, content}, index) => (
                    <Accordion key={index} title={title} content={content}/>
                ))}
            </div>
        </div>
    )
};
 
export default About;