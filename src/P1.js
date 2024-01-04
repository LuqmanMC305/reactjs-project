import React from 'react';
import './MainStyle.css'; // Import the CSS file for this component
import nextSeedImage from './Images/nextSeedOriginal.png';


function P1() {
    return (
        <section className="first-page">
            <img src={nextSeedImage} alt="nextSeed" className="next-seed-img" />
            <div className="desc">
                <h2 className="title">Effortless Parking, Intelligent Living: Where Innovation Meets Convenience in Every Space</h2>
                <a className="button-container" href="https://www.youtube.com/watch?v=AxZWd593ApQ&t=0s" target="_blank" rel="noreferrer">Read More</a>
                <h2 className="title2">We innovate the world through AI technologies</h2>
                <h3 className="title3">Digitalize Your Parking Experience</h3>
            </div>
            <div id='p2'></div>
        </section>

    );
}

export default P1;
