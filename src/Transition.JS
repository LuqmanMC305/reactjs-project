import React from 'react';
import './MainStyle.css';
import nextSeedImage from './Images/nextSeedOriginal.png';

function Transition(){
    return(
        <div className="p5-header">
            <img src={nextSeedImage} alt="nextseed-img" className="nextseed-img-p4"> </img>
        </div>
    );
}

export default Transition;
        