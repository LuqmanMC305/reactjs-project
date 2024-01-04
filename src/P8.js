import React from 'react';
import './MainStyle.css';
import virtualMeeting from './Images/online.png';
import physicalMeeting from './Images/meeting.png';
import location from './Images/location.png';
import socmed from './Images/socmed.png';
import phone from './Images/phone.png';


function P8() {
    return (
        <section className="p8" id='p8'>
            <div className="p8-content">
                <div className="p8-desc">
                    <h1>Business Relation</h1>
                    <h2>Feel free to get in touch with us any convenient way</h2>
                    <div className="icon-container">
                        <div className="desc-container">
                            <img src={virtualMeeting} alt="nextseed-img" className="icon-img" />
                            <p className="subtitle">Virtual Meeting</p>
                        </div>  
                        <p>Booking your appointments with us</p>
                    </div>

                    <div className="icon-container">
                        <div className="desc-container">
                            <img src={physicalMeeting} alt="nextseed-img" className="icon-img" />
                            <p className="subtitle">Physical Meeting</p>
                        </div>
                        <p>Booking your appointments with us</p>
                    </div>

                    <div className="icon-container">
                        <div className="desc-container">
                            <img src={location} alt="nextseed-img" className="icon-img"/>
                            <p className="subtitle">School of Computer Sciences, USM Main Campus</p>
                        </div>
                        <p className="address">11700 Penang, Malaysia.</p>
                    </div>
                </div>

                <div className="p8-form">
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your email address" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="company">Company</label>
                            <input type="text" id="company" placeholder="Your company (optional)" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" placeholder="Your message"></textarea>
                        </div>

                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>

            <div className="contact">
                <div className="contact-container">
                    <h1>Contact Us</h1>
                    <p>+60 12 298 2092- Office Number </p>
                    <p>+60 12 1092 4095 - WhatsApp </p>
                    <p>nextseed3s@gmail.com</p>
                </div>

                <div className="contact-img">
                    <img src={phone} alt="nextseed-img" className="icon-img" />
                </div>
            </div>

            <div className="social-media">
                <p>Our Social Media</p>
                <img src={socmed} alt="nextseed-img" className="icon-img" />
            </div>

            <div className="footer">
                <p>© 2023 Next Seed | Your Smart Parking Solution</p>
            </div>
        </section>
    );
}

export default P8;
