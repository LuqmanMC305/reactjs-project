import React from 'react';
import './MainStyle.css';
import nextSeedImage from './Images/nextSeedOriginal.png';

function P3() {
    return (
        <section className="p3">
            <div className="p3-container">
                <h1 className="p3-header">Passionate to developing sustainable technologies</h1>
                <p className="p3-desc"><strong> Our mission is to innovate the world through AI Tech,</strong> specifically in the area of computer vision & software providers to solve real-world problems and to make the car users community's daily lifestyle more convenient.</p>
                <p className="p3-desc"><strong> Our vision</strong> Our vision is to be a platform to transform all car services to digitalization in the future that can be applied to both B2B and B2C businesses.</p>
                <a href="https://youtu.be/xPO_1AQWtaA" className="explore-more"> Explore More </a>
            </div>
            <img src={nextSeedImage} alt="nextseed-img" className="nextseed-img" />
        </section>
    );
}

export default P3;
