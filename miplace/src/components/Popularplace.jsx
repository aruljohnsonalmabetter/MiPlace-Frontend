import React from 'react'
import image from '../images/Rectangle-3webp.webp'

export const Popularplace = () => {
    return (
        
        <div class="flex justify-center items-center ">
        
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
                  <span class=" bg-black rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
    )
}
