import React from 'react';
import './MainStyle.css';
import FooterImg from './Images/footerimg.png'
import nextSeedImage from './Images/nextSeedOriginal.png';

function P7() {
    return (
        <div id='p7'>
            <div className="p7-header">
                <img src={nextSeedImage} alt="nextseed-img" className="nextseed-img-p4" />
            </div>
            
            <section className="p7">
                <div className="p7-content">
                    <div className="solution">
                        <h1>Our Solution</h1>
                        <p>ANPR helps in optimizing traffic flow by efficiently monitoring and managing vehicle movements. This can reduce congestion, minimize delays, and improve overall transportation efficiency in urban environments.</p>
                        <p>ANPR enhances public safety by aiding law enforcement in tracking vehicles linked to crime. In urban areas, it simplifies parking with automated systems, reducing search time and optimizing parking facility usage.</p>
                    </div>
                    <div className="video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/xPO_1AQWtaA?si=ZjU422na-gMIZN7f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <a className="talk-us" href="#p8">Talk to Us</a> 
                <img src={FooterImg} alt="footer" className="footer-img" />
            </section>
        </div>
    );
}

export default P7;


