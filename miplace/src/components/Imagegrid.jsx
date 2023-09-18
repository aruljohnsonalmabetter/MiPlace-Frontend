import React from 'react'
import image1 from "../images/rec.webp"

import "./styles.css";
function Imagegrid({ img }) {
    
    return (
        <>
          
            <div className="p-8 flex">
                <div className="w-1/2 h-full rounded-lg">
                   <img src={image1} className="object-cover rounded-lg"></img>
                </div>

               <div className="w-1/2 flex h-full">
                    <div className="flex w-1/2">
                      <div className="flex-col h-full">
                        <img src={image1} className="object-cover h-1/2 ">
                            </img>
                            <img src={image1} className="object-cover h-1/2 ">
                            </img>
                        </div>
                        {/* <div className='flex-col h-full'>
                            <img src={image1} className="object-cover h-1/2 ">
                            </img>
                            <img src={image1} className="object-cover  h-1/2 ">
                            </img>
                        </div>   */}
                     </div>    
                    <div className="flex w-1/2">
                        <div className="flex-col h-full">
                            <img src={image1} className="object-cover h-1/2 ">
                            </img>
                            <img src={image1} className="object-cover h-1/2 ">
                            </img>
                        </div>
                        {/* <div className='flex-col h-full'>
                            <img src={image1} className="object-cover h-1/2 ">
                            </img>
                            <img src={image1} className="object-cover  h-1/2 ">
                            </img>
                        </div>   */}
                    </div>
                    {/* <div className='flex-col h-full'>
                            <img src={image1} className="object-cover h-1/2 ">
                            </img>
                            <img src={image1} className="object-cover  h-1/2 ">
                            </img>
                        </div>   */} 
            </div>
           </div> 
                
        </>
    )
}

export default Imagegrid