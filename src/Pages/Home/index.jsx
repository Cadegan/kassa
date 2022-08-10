import React from 'react';
import imgBanner from "../../assets/home-banner.jpg"


function Home () {
    return (
        <section className="homeSection">
            <div className='homeBanner'>
                <img src={imgBanner} alt="Banner"></img>
                <p>Chez vous, partout et ailleurs</p>
            </div>

        </section>
    )
}

export default Home;