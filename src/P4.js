import React from 'react';
import './MainStyle.css';
import icon1 from './Images/4.png';
import icon2 from './Images/5.png';
import icon3 from './Images/6.png';
import icon4 from './Images/7.png';
import icon5 from './Images/8.png';
import icon6 from './Images/9.png';
import icon7 from './Images/10.png';
import sdg9 from './Images/sdg9.png';
import sdg17 from './Images/sdg17.png';
import nextSeedImage from './Images/nextSeedOriginal.png';
import gate from './Images/ParkingGate.png';


function P4() {
    return (
        <div>
            <div className="p4-header">
                <img src={nextSeedImage} alt="nextseed-img" className="nextseed-img-p4" />
            </div>
      
            <section className="p4">
                <div className="p4-main">
                    <div className="div-tech">
                        <h2>Our Key Technologies</h2>
                        <p>Our company, Next Seed is where we revolutionize your daily commute with cutting-edge Automatic Number Plate Recognition (ANPR) solutions. Elevate your lifestyle with seamless, convenient experiences as our advanced technology redefines urban mobility.</p>
                        <img src={gate} alt="gate" className="gate-img" />
                    </div>
                    <div className="sdg">
                        <h2>SDG 9 & 17</h2>
                        <p>By become pioneering ANPR services, our company aligns with SDG 9, driving innovation in infrastructure. Embracing SDG 17, we forge partnerships, amplifying our impact globally. Committed to sustainable progress, we redefine urban mobility and foster collaborative solutions for a resilient, interconnected world.</p>
                        <img src={sdg9} alt="sdg9" className="sdg-img" />
                        <img src={sdg17} alt="sdg17" className="sdg-img" />
                    </div>
                </div>
                <div className="clients">
                    <h2 className='clients-name'>Our Clients:</h2>
                    <div className="img-client-container">
                        <img src= {icon1} alt="plus" className="client-img" />
                        <img src={icon2} alt="kleastmall" className="client-img" />
                        <img src={icon3} alt="pavilion" className="client-img" />
                        <img src={icon4} alt="themall" className="client-img" />
                        <img src={icon5} alt="emiratesmall" className="client-img" />
                        <img src={icon6} alt="aeon" className="client-img" />
                        <img src={icon7} alt="ikea" className="client-img" id='ikea-img'/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default P4;
