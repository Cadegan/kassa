import React from 'react';
import Accordion from '../../components/Accordion/index';
import { accordionData } from '../../data/accordionData';

function About () {
    return (
        <div>
            <div className='accordion'>
                {accordionData.map(({title, content}) => (
                    <Accordion title={title} content={content}/>
                ))}
            </div>
        </div>
    )
};
 
export default About;