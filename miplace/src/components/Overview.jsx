import React, { useEffect } from 'react';

const Overview = ({ website }) => {
    useEffect(() => {
        console.log(website);
    }, [website])
    return (
        <div className="border-2 rounded max-w-1409px mx-auto h-600px font-mullish bg-gradient-to-r from-gray-500 via-black-500">
            <div className=" border-gray-300 p-4 rounded">
                <h1 className=" bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded inline-block text-white text-2xl font-bold mb-4 font-mullish hover:shadow-indigo-500/40">Overview</h1>
                <div className="w-500px">
                    <p className=" font-mullish text-xl ">
                        <span className='text-bold'>Wish to know more ?
                            Do visit the website :-</span>
                        <br />
                        <a href={website} target='_' className='text-bold text-blue-700 underline-offset-2 hover:text-deepBlue'>{website}</a>
                    </p>
                    {/* ... Other paragraphs */}
                </div>
                {/* Four boxes */}
                {/* <div className="flex gap-5 mt-4">
                    <div className="w-160px h-300px bg-blue-500 border border-gray-300 flex justify-center items-center rounded">
                        <span className="text-gray-100 text-sm">Near Airport</span>
                    </div>
                    <div className="w-160px h-300px bg-blue-500 border border-gray-300 flex justify-center items-center rounded">
                        <span className="text-gray-100 text-sm">Near Park</span>
                    </div>
                    <div className="w-160px h-300px bg-blue-500 border border-gray-300 flex justify-center items-center rounded">
                        <span className="text-gray-100 text-sm">Near Nightlife</span>
                    </div>
                    <div className="w-160px h-300px bg-blue-500 border border-gray-300 flex justify-center items-center rounded">
                        <span className="text-gray-100 text-sm">Near Hotel</span>
                    </div>
                </div> */}
            </div>
        </div>


    );
};

export default Overview;
