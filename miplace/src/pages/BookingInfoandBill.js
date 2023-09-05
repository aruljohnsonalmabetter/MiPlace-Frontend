import React from 'react'
import HotelBookingComponent from '../components/HotelBookingComponent'
import Loginbookinginfo from '../components/Loginbookinginfo'
import FinalBookingSlipComponent from '../components/FinalBookingSlipComponent'
import { Link } from 'react-router-dom';


function BookingInfoandBill() {
  return (
   
    <div class="flex px-[7rem] border-solid border-2 border-indigo-600  gap-[2.5rem]">
   
      <div class="  mt-[2.5rem]  w-[49.375rem] h-[64.25rem]  ">
       
      <HotelBookingComponent/>
      
      <div class="border-solid my-[2.5rem]  w-[49.375rem] border-2 border-{A1A1A1} rounded-lg">
          <div class="flex my-[1rem] bg-[#1E91B6] w-[47.375rem] mx-[1rem] border-solid border-2 border-indigo-600 justify-between rounded-lg"  >
              <div className='text-white my-[1rem] ml-[1rem]'>
                  <Link to="/mybookings">
                  <h1>Pay in Full</h1>
                  </Link>
                  <p>Pay the total and you are all set</p>
              </div>
              <div className='my-[1rem] mr-[1rem]'>dot</div>
          </div>
      </div>



      <Loginbookinginfo/>

      


      </div>

      
      <FinalBookingSlipComponent/>

      

      
      
    </div>
    
   

     

     
    
  )
}

export default BookingInfoandBill