import React from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';

const Availablerooms =({room,price,text}) =>{
  return (
    <>
    <div className="max-w-1409px mx-auto p-4 h-600px border border-gray-300  rounded">
    <div><h1 className="text-2xl font-bold mb-4">Available rooms</h1></div>

    <div class="flex justify-between">
        <div class="flex">
            <img/>
            <p>{room}</p>
        </div>
        <div class="flex">
            <h2>{price}/night</h2>
            <Button
                text={text}
            />
        </div>
    </div>
    
    <div class="flex justify-between">
        <div class="flex">
            <img/>
            <p>Superior room - 1 double bed or 2 twin beds</p>
        </div>
        <div class="flex">
            <h2>₹2450/night</h2>
            <Link to="/bookingInfoandBill" >
            <button>Book now</button>
            </Link>
        </div>
    </div>

    <div class="flex justify-between">
        <div class="flex">
            <img/>
            <p>Superior room - 1 double bed or 2 twin beds</p>
        </div>
        <div class="flex">
            <h2>₹2450/night</h2>
            <button>Book now</button>
        </div>
    </div>

    <div class="flex justify-between">
        <div class="flex">
            <img/>
            <p>Superior room - 1 double bed or 2 twin beds</p>
        </div>
        <div class="flex">
            <h2>₹2450/night</h2>
            <button>Book now</button>
        </div>
    </div>

    </div>

    </>
  )
}

export default Availablerooms