import React from 'react'

function BookingInfoandBill() {
  return (
    <div class="flex ">
    <div class="flex border-solid border-2 border-indigo-600 mx-auto w-[80rem] h-[80rem] gap-[2.5rem]">
   
      <div class=" border-solid border-2 border-indigo-600 mx-auto w-[49.375rem] h-[64.25rem]  ">
      
      <div class="flex py-[1.5rem] justify-between">
      <h1>Superior room - 1 double bed or 2 twin beds</h1>
      <h2>₹ 5240/night</h2>
      </div>
      

       <div class="flex py-[1.5rem] border-solid border-2 border-indigo-600 gap-[2rem]">
       <h1>hotel image</h1>
       <h2>Lemon Tree Premier Pune</h2>
       </div>
        

        <div class="flex gap-[2rem] justify-between"> 
          <div>date from</div>
          <div>image</div>
          <div>date too</div>
      </div>

      <div><h2>no of days</h2></div>

      <div class="border-solid border-2 border-red-600">
          <div class="flex border-solid border-2 border-indigo-600 justify-between" >
              <div>
                  <h1>Pay in Full</h1>
                  <p>Pay the total and you are all set</p>
              </div>
              <div>dot</div>
          </div>
      </div>

      <div>
          <h1>Login or SignUp to Book</h1>
          <input
           type='number'
           placeholder='Phone Number'
          />
          <p>We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy
          </p>
          <button>Continue</button>
      </div>

      <div class="flex">
          <div>line</div>
          <div>
            <h2>Or</h2>
          </div>
          <div>line</div>
      </div>

      <div class="flex justify-between">
          <div>facebook</div>
          <div>google</div>
          <div>apple</div>
      </div>

      <div class="self-center content-center">
          <div >Continue with email</div>
      </div>


      </div>

      
      <div class=" mx-auto w-[28.125rem] h-[29.34375rem] border-black bg-slate-300">
          <div class="flex justify-between">
              <div>image</div>
              <div>
                  <h3>CVK Park Bosphorus...</h3>
                  <h1>Superior room - 1 double bed or 2 twin beds</h1>
                  <div class="flex">
                      <div>rating </div>
                      <div>Reviews</div>
                  </div>
              </div>
          </div>

          <div>line</div>
          <div><p>Your booking is protected by PhonePe</p></div>
          <div>line</div>
      
      </div>

      

      
      
    </div>
    
      

      </div>
    
  )
}

export default BookingInfoandBill