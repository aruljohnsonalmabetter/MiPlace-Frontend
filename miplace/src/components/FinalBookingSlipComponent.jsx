import React from 'react'
function FinalBookingSlipComponent({ url, review, rating, address }) {
  return (
    <div class=" gap-[1rem] mt-[2.5rem]  w-[28.125rem] h-[29.34375rem] border-black ">
      <div class="flex gap-[2rem] justify-between mx-[2rem] my-[2rem]">
        <div className=' w-80		'>

          <img src={url} alt='ALT' className='object-center	object-cover	h-full	'/>
        </div>
        <div className='gap-[1rem]'>
          <h3>{address}</h3>
          <h1>Superior room - 1 double bed or 2 twin beds</h1>
          <div class="flex gap-[0.5rem]">
            <div> <span className='text-bold'>Rating :</span>  {rating} </div>
            <div><span className='text-bold'>Review :</span> {review}</div>
          </div>
        </div>


      </div>

      <div className='gap-[1rem] mx-[2rem]'>
        <div className='w-[20.125rem] h-[0.03125rem] bg-[#112211]'></div>
        <div><p>Your booking is protected by PhonePe</p></div>
        <div className='w-[20.125rem] h-[0.03125rem] bg-[#112211]'></div>
      </div>



    </div>
  )
}

export default FinalBookingSlipComponent