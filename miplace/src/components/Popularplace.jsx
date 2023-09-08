import React from 'react'
import image from '../images/Rectangle-3webp.webp'
import "./styles.css";

export const Popularplace = () => {
    return (

      <div className='mt-[2.246875rem]'>
       <h1 className='mx-[4.8rem]   text-2xl font-bold'> Popular Place</h1>
        
        <div id = "popularsearch"class="flex justify-center items-center ">


        
          <div class="p-6 flex flex-wrap items-center justify-center">


            <div class="flex-shrink-0 m-6 relative overflow-hidde rounded-lg max-w-xs shadow-lg">

              <div class="relative  flex items-center justify-center">
                <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" ></div>
                <img
                  src={image}
                  alt="" />

              </div>
              <div class=" text-brown inset-0 items-end px-6 pb-6 mt-6">
                <span class="block opacity-75 -mb-1">Indoor</span>
                <div class="flex justify-between">
                  <span class="block font-semibold text-xl">Peace Lily</span>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Book Now
                  </button>
                </div>
              </div>
            </div>


          </div>

          <div class="p-12 flex flex-wrap items-center justify-center">
            

            <div class="flex-shrink-0 m-6 relative overflow-hidde rounded-lg max-w-xs shadow-lg">
              
              <div class="relative  flex items-center justify-center">
                <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" ></div>
                <img 
                src={image}
                 alt=""/>
                 
              </div>
              <div class=" text-brown inset-0 items-end px-6 pb-6 mt-6">
                <span class="block opacity-75 -mb-1">Indoor</span>
                <div class="flex justify-between">
                  <span class="block font-semibold text-xl">Peace Lily</span>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            
            
          </div>

          <div class="p-12 flex flex-wrap items-center justify-center">
            

            <div class="flex-shrink-0 m-6 relative overflow-hidde rounded-lg max-w-xs shadow-lg">
              
              <div class="relative  flex items-center justify-center">
                <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" ></div>
                <img 
                src={image}
                 alt=""/>
                 
              </div>
              <div class=" text-brown inset-0 items-end px-6 pb-6 mt-6">
                <span class="block opacity-75 -mb-1">Indoor</span>
                <div class="flex justify-between">
                  <span class="block font-semibold text-xl">Peace Lily</span>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            
            
          </div>


          <div class="p-12 flex flex-wrap items-center justify-center">
            

            <div class="flex-shrink-0 m-6 relative overflow-hidde rounded-lg max-w-xs shadow-lg">
              
              <div class="relative  flex items-center justify-center">
                <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" ></div>
                <img 
                src={image}
                 alt=""/>
                 
              </div>
              <div class=" text-brown inset-0 items-end px-6 pb-6 mt-6">
                <span class="block opacity-75 -mb-1">Indoor</span>
                <div class="flex justify-between">
                  <span class="block font-semibold text-xl">Peace Lily</span>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>

        </div>
    )
}
