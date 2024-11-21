import React from 'react';
import './marquee.css'; // Import the CSS file for styling

const Marquee = ({ text }) => {
    return (
        <div className="marquee">
            <div className="marquee-inner">
                {text}
            </div>
        </div>
    );
};

export default Marquee;