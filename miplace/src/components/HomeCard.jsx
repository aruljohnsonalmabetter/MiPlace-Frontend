import React from 'react';
import backgroundImage from '../images/Homecard.webp';
import { PlaceSearchBarComponent } from './PlaceSearchBarComponent';

const HomeCard = () => {
    const cardStyle = {

    };
    return (
        // <div className="home-card bg-cover bg-center h-[500px] overflow-x-hidden" >
        <div className="home-card bg-cover bg-center h-[500px] overflow-x-hidden relative" style={{ ...cardStyle, backgroundImage: `url(${backgroundImage})` }}>
            <div className=' bottom-0 w-full absolute'>
            {/* <div className=' bottom-0 w-full absolute flex justify-center items-center'> */}
                {/* <div className='bg-white w-11/12'> */}

                    <PlaceSearchBarComponent />
                    <button className='bg-[#196680] px-2 py-2 text-white w-10/12 text-semibold text-lg'>Search</button>

                {/* </div> */}
            </div>
        </div>
    )
}

export default HomeCard;