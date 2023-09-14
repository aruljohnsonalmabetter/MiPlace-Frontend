import React, { useEffect } from 'react';

const Overview = ({ website }) => {
    useEffect(() => {
        console.log(website);
    }, [website])
    return (
        <div className="max-w-1409px mx-auto p-4 h-600px">
            <div className="border border-gray-300 p-6 rounded">
                <h1 className="text-2xl font-bold mb-4 font-mullish">Overview</h1>
                <div className="w-500px">
                    <p className="text-gray-600 font-mullish">
                        <span className='text-bold'>Wish to know more ?
                            Do visit the website :-</span>
                        <br />
                        <a href={website} target='_' className='text-bold text-blue-400 hover:text-black'>{website}</a>
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
