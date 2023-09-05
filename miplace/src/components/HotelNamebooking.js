import React from 'react'
import Button from './Button';
// import { FaLocationDot } from "react-icons/fa" ;
import { BiSolidLocationPlus } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { BsFillShareFill } from "react-icons/bs";
import Rating from "./Rating";


const HotelNamebooking = ({hotelname,city,price,text}) => {
  return (
    
    <div class="flex justify-between mx-[3.125rem]  space-x-4 border-solid border-2 border-indigo-600">
            <div>
                <h1 className="font-[Montserrat] text-[2.125rem] font-semibold">{hotelname}</h1>
                
                <h3 className=" flex font-[Montserrat]  font-medium" ><BiSolidLocationPlus/> {city}</h3>

                <div className='flex'>
                      <Rating value="5" className="inline " />

                      <p>review</p>
                </div>
                
            </div>
            <div>
                <h1 className="font-[Montserrat] text-[2.125rem] font-bold text-[#1E91B6]">{price}/night</h1>
                <div className='flex'>
                    <FcLike className="text-2xl hover:scale-75   cursor-pointer transition ease-in-out delay-250"/>
                    <BsFillShareFill/>
                    <Button
                    text={text}
                    />
                    
                </div>
                
            </div>
            
        </div>
        
       
        
  )
};

export default HotelNamebooking;