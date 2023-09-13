import React,{ useEffect } from 'react'
import { FaHotel } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import Bookingimage from "../components/Bookingimage";
import { useSelector } from "react-redux/es/hooks/useSelector.js";


function Bookingreceipt() {

    const hotelObj = useSelector((state) => state.indiHotelInfoFeature);
  
  useEffect(() => {
    console.log(hotelObj);
  }, [hotelObj]);

  return (

    <div class="flex my-[3rem] mx-[3.125rem] border-double  ">
            <div className='bg-[#ECFAFF]  w-[15.375rem] h-[18rem]   p-[2rem]'>
                <div className='mx-auto my-auto gap-auto w-[11.75rem] h-[3.625] '> 
                    <h1 className='font-semibold text-[2rem]'>Thur, Dec 8</h1>
                    <p className='font-medium text-[0.75rem]'>Check-In</p>
                </div> 

                    <div className=' mx-auto flex justify-around content-around my-[1rem]'>
                        <div> <FaHotel
                        className='w-[2rem] h-[2rem]'
                        /></div>
                        <div className='w-[4.4375rem] h-[1.5625rem] rounded-lg border-2     `border-{#A1A1A1}` text-center '>1 Night</div>
                    </div>

                <div className='mx-auto my-auto w-[11.75rem] h-[3.625] '> 
                    <h1 className='font-semibold text-[2rem]'>Thur, Dec 8</h1>
                    <p className='font-medium text-[0.75rem]'>Check-out</p>
                </div> 
            </div>

            <div className='w-[49.1875rem] h-[19.3125rem] '>
                        <div className='flex justify-between p-[2rem] h-[6rem] bg-[#1E91B6]'>
                            
                            
                                <div className='flex'>
                                        <img></img>
                                        <h2>name</h2>
                                    </div>

                                 <div >
                                    <p >Superior room - 1 double bed or 2 twin beds</p>

                                 </div>   
                                        
                           

                        </div>

                        <div className='flex justify-around p-[2rem]'>
                                <div  className='flex '>
                                <AiFillClockCircle className='flex mr-2 justify-center items-center h-full'/>
                                        <div >
                                            <p>check in time</p>
                                            <p>date</p>
          
                                           
                                        </div>
                                </div>
                                <div className='flex '>
                                <AiFillClockCircle className='flex mr-2 justify-center items-center h-full'/>
                                        <div >
                                        <p>check in time</p>
                                        <p>date</p>

                                    </div>
                                </div>
                                <div className='flex'>
                                <FaHotel  className='flex mr-2 justify-center items-center h-full'/>
                                            <div >
                                            <p>check in time</p>
                                            <p>on arrival</p>

                                            </div>
                                </div>
                        
                        </div>


                        <div className='px-[1.5rem]'>
                                <h1> Booking ID</h1>
                                <h2>987423492402301235434</h2>
                        </div>
            </div>

            <div className='w-[19.9375rem] h-[19.3125rem] '>
            <Bookingimage 
            url={hotelObj.main_photo_url}
            
          />
                
            </div>

            <div className=' h-full  flex items-center '>
                <h1 className='w-[3rem] mt-[7rem] text-xs  rounded-full  border-2 border-{#A1A1A1}'>2 days</h1>
            </div>
        </div>

  )
}

export default Bookingreceipt