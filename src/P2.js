import React from 'react';
import './MainStyle.css';
import HQ from './Images/hq.png';

function P2(){
    return(
        <section class="company-info">
        <div class="company-container">
         <h1 class="our-company">Our Company</h1>
         <p class="company-desc">The Next Seed has been established around 6 years ago under the supervision Centre for Innovation & Consultants at the University of Science Malaysia (USM). 
         Our Team is always motivated and optimistic to design, develop, and re-inventing new technology to solve real-life problems around us by implementing artificial intelligence in our solution. 
         Our mission is to innovate the world through AI Tech, specifically in computer vision and software providers, to make daily life more convenient. 
         Here our team would like to introduce a car app platform for car users that offer smart parking and connects car users with workshop, mechanic, and auto-part vendor for car maintenance purposes.</p>
         <a href="https://www.google.com" class="read-more"> Read More </a>
        </div>
         <img src={HQ} alt="office-builing" class="company-hq-img"></img>
         
       </section>
    );
}

export default P2;