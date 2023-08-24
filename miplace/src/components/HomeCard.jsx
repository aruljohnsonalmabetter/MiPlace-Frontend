import React from 'react';
import backgroundImage from '../images/Homecard.webp';

const HomeCard = () => {
    const cardStyle = {
        
    };
    return (
        <div className="home-card bg-cover bg-center h-[500px] overflow-x-hidden" style={{ ...cardStyle, backgroundImage: `url(${backgroundImage})` }}>
                   
        </div>
    )
}

export default HomeCard;