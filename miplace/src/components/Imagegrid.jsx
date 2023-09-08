import React from 'react'
import Image from '../images/Rectangle 3.webp'
import Image1 from '../images/Rectangle 5 (2).webp'
import Image2 from '../images/Rectangle 6 (1).webp'
import Image3 from '../images/Rectangle 5 (1).webp'
import Image4 from '../images/Rectangle 6 (2).webp'

function Imagegrid({ img }) {
    return (
        <>
            <div class="flex mx-[3.5rem] my-[3.5rem]">
                <div>
                    <img
                        src={img}
                    />
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <img
                            src={img}
                        />
                    </div>
                    <div>
                        <img
                            src={img}
                        />
                    </div>
                    <div>
                        <img
                            src={img}
                        />
                    </div>
                    <div>
                        <img
                            src={img}
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Imagegrid