import React from 'react'

const HotelBookingComponent = () => {
  return (
    <>

    <div class=" border-solid rounded-lg border-2 border-{A1A1A1} mx-auto w-[49.375rem] h-[23.8125rem] ">


    <div class="flex mx-[1.5rem] mt-[2rem] mb-[1.5rem] py-[1.5rem] justify-between">
      <h1>Superior room - 1 double bed or 2 twin beds</h1>
      <h2>₹ 5240/night</h2>
      </div>

      <div class="flex mx-[1.5rem] mb-[2.5rem]  w-[46.375rem] h-[5.9375rem] py-[1.5rem] rounded-lg border-solid border-2 border-{A1A1A1} gap-[2rem]">
       <h1>hotel image</h1>
       <h2>Lemon Tree Premier Pune</h2>
       </div>

       <div class="flex mx-[1.5rem] mb-[1.5rem] border-solid border-2 border-indigo-600 w-[46.375rem] h-[3.0625rem] gap-[2rem] justify-between"> 
          <div>date from</div>
          <div>image</div>
          <div>date too</div>
      </div>

      <div class="ml-[1.5rem] "><button className='rounded-full border-solid border-2 border-{A1A1A1}'>no of days</button></div>


      </div>

       </>  
  )
}

export default HotelBookingComponent

