import React from 'react';
import P1 from './P1'; // Import the FirstPage component
import P2 from './P2';
import P3 from './P3';
import P4 from './P4';
import P5 from './P5';
import P6 from './P6';
import P7 from './P7';
import P8 from './P8';
import './MainStyle.css'; 



function App() {
    return (
        <div>
             <ul>
                <li>
                  <a href='#p8'>Contact Us</a>
                </li>
                 <li>
                  <a href='#p7'>Our Product</a>
                </li>
                <li>
                  <a href='#p6'>Our Team</a>
                </li>
                <li>
                  <a href='#p2'>About Us</a>
                </li>
            </ul>
            <P1 />
            <P2 />
            <P3 />
            <P4 />
            <P5 />
            <P6 />
            <P7 />
            <P8 />
        </div>
    );
}

export default App;

