import React from 'react';
import './MainStyle.css';
import BarChart from './Images/barchart.png';
import nextSeedImage from './Images/nextSeedOriginal.png';


function P5() {
    return (
          <div>
            <div className="p4-header">
                <img src={nextSeedImage} alt="nextseed-img" className="nextseed-img-p4" />
            </div>
            <section className="p5" id='p5'>
                <div className="p5-content">
                    <div className="p5-desc">
                        <h1 className="p5-title">Our Business Projection</h1>
                        <p className="p5-info">Next Seed revenue and profit projections indicate a consistent and robust growth rate over the past five years. It serves as tangible evidence of our company's success in fostering strong and sustainable business relationships. This trend instills confidence in our ability to enhance performance and scale-up our business in the future.</p>
                        <div className="revenue-container">
                            <span className="revenue-box"></span>
                            <p>Our Company Revenue</p>
                        </div>
                        <div className="profit-container">
                            <span className="profit-box"></span>
                            <p>Our Company Profit</p>
                        </div>
                    </div>
                    <div className="p5-chart">
                        <img src={BarChart} alt="bar-chart" className="bar-chart-img" />
                    </div>
                </div>
                <a href="https://www.google.com" className="about-us"  rel="noreferrer">About Us</a>
            </section>
        </div>
    );
}

export default P5;
