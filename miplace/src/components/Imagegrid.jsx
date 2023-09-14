import React from 'react'
import Hotel15 from "../images/Hotelimages/Hotel15.webp";
import Hotel23 from "../images/Hotelimages/hotel23.webp";
import "./styles.css";
function Imagegrid({ img }) {
    
    return (
        <>
            <div id="imgrid"class="flex justify-center  mx-[0.5rem] my-[0.5rem] rounded  ">
                <img id="img1" width="400px" height ="400px"src={Hotel15} />
                <img id="img2"width="1000px" height="400px" src={Hotel23} />
                <img id="img3"width="400px" height="400px" src={Hotel15} />
            </div>    
        </>
    )
}

export default Imagegrid