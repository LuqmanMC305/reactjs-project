import React from 'react';
import './MainStyle.css';
import suhaimi from './Images/suhaimi.jpg';
import luqman from './Images/luqman4.jpg';
import khalil from './Images/khalil.jpg';
import abgdin from './Images/abgdin.jpg';
import nextSeedImage from './Images/nextSeedOriginal.png';


function P6() {
    return (
        <div id='p6'>
        <div className="p6-header">
            <img src={nextSeedImage} alt="nextseed-img" className="nextseed-img-p4" />
        </div>
            <section className="p6-content">
                <h1 className="p6-title">Meet Our Team</h1>
                <div className="member-container">
                    <div className="member">
                        <img className="member-img" src={suhaimi} alt="suhaimi" />
                        <h3>MUHAMMAD SUHAIMI BIN MOHAMAD SHAHUDI</h3>
                        <p>Chief Executive Officer (CEO)</p>
                    </div>
                    <div className="member">
                        <img className="member-img-luqman" src={luqman} alt="luqman" />
                        <h3>LUQMANUL HAKIM BIN AFIZAR</h3>
                        <p>Chief Technology Officer (CTO)</p>
                    </div>
                    <div className="member">
                        <img className="member-img" src={khalil} alt="khalil" />
                        <h3>KHALIL AHMAD BIN ZAINALABIDIN</h3>
                        <p>Chief Operating Officer (COO)</p>
                    </div>
                    <div className="member">
                        <img className="member-img" src={abgdin} alt="abgdin" />
                        <h3>MUHAMMAD AISAMUDDIN BIN AZIZAN</h3>
                        <p>Chief Financial Officer (CFO)</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default P6;