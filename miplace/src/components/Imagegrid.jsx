import React from 'react'
import Image from '../images/Rectangle 3.webp'
import Image1 from '../images/Rectangle 5 (2).webp'
import Image2 from '../images/Rectangle 6 (1).webp'
import Image3 from '../images/Rectangle 5 (1).webp'
import Image4 from '../images/Rectangle 6 (2).webp'

function Imagegrid() {
  return (
    <>
    <div class="flex">
    <div>
        <img
            src={Image}
        />
    </div>

    <div class="grid grid-cols-2 gap-4">
            <div>
            <img
                src={Image1}
                />
            </div>
            <div>
            <img
                src={Image2}
                />
            </div>
            <div>
            <img
                src={Image3}
                />
            </div>
            <div>
            <img
                src={Image4}
                />
            </div>
      
    </div>
    </div>
    </>
  )
}

export default Imagegrid