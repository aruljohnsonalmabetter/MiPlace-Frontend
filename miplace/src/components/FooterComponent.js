import React from 'react'

export const FooterComponent = () => {
    return (
        <div className='p-3 footer flex justify-center items-center top-0 sticky bg-white'>
            <div className=' flex justify-between items-center  w-11/12 h-full	'>
                <div className='left w-2/5 text-start	 space-y-4'>
                    <p className='text-xl font-bold	 inline-block	'>About <br/> MiPlace</p>
                    <p className='inline-block	'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.</p>
                    <ul className=' flex justify-between text-md w-2/5'>
                        <a href='http://localhost:3000/'>icon</a>
                        <a href='http://localhost:3000/'>icon</a>
                        <a href='http://localhost:3000/'>icon</a>
                        <a href='http://localhost:3000/'>icon</a>
                    </ul>
                </div>
                <div className=' p-5 text-start left-0 space-y-4	'>
                    <p className='text-xl font-bold	'>Company</p>
                    <ul className='flex flex-col space-y-3 text-md '>
                        <a href='http://localhost:3000/'>About</a>
                        <a href='http://localhost:3000/'>Features</a>
                        <a href='http://localhost:3000/'>Works</a>
                        <a href='http://localhost:3000/'>Career</a>
                    </ul>
                </div>
                <div className=' p-5 text-start left-0 space-y-4	'>
                    <p className='text-xl font-bold	'>Help</p>
                    <ul className='flex flex-col space-y-3 text-md '>
                        <a href='http://localhost:3000/'>Customer Support</a>
                        <a href='http://localhost:3000/'>Delivery Details</a>
                        <a href='http://localhost:3000/'>Terms & Conditions</a>
                        <a href='http://localhost:3000/'>Privacy Policy</a>
                    </ul>
                </div>




            </div>
        </div>
    )
}
