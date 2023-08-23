import React from 'react'
export const HeaderComponent = () => {
    return (
        <div className='navbar flex justify-center items-center h-20 top-0 sticky bg-white'>
            <div className=' flex justify-between items-center  w-11/12 h-full	'>
                <div className="logo  font-bold text-xl		">
                    <h2>MiPlace</h2>
                </div>
                <div className="w-2/5 text-lg	">
                    <ul className='flex justify-between items-center '>
                        <li>
                            About Us
                        </li>
                        <li>
                            Contact Us
                        </li>
                        <li>
                            Login
                        </li>
                        <button className='btn px-6 py-3 rounded-md '>
                            Sign Up
                        </button>

                    </ul>
                </div>
            </div>
        </div>
    )
}
