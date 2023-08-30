import React from 'react';

const Overview = () => {
    return (
            <div className="max-w-1409px mx-auto p-4 h-600px">
                <div className="border border-gray-300 p-6 rounded">
                    <h1 className="text-2xl font-bold mb-4">Overview</h1>
                    <div className="w-500px">
                        <p className="text-gray-600">
                        Lemon Tree Premier, City Center Pune is a great choice for travellers looking for a 5 star hotel in Pune. It is located in Near Pune Train Station.This Hotel stands out as one of the highly recommended hotel in Pune and is recommended by 86% of our guests. Hotel is rated 4.1 out of 5, which is considered as very good. The property enjoys a great location advantage and provides easy and fast connectivity to the major transit points of the city. Some of the popular transit points from Lemon Tree Premier, City Center Pune are Pune Railway Station (520 mtrs), Pune Station Bus Stand (1.7 kms) and Pune International Airport (7.8 kms). The Hotel is in proximity to some popular tourist attractions and other places of interest in Pune. Some of the tourist attractions near Lemon Tree Premier, City Center Pune Nucleus Mall (970 mtrs), Shaniwar Wada (2.9 kms), Pataleshwar Caves (3.5 kms) and FC Road (4.8 kms).From all the 4 Star hotels in Pune, Lemon Tree Premier, City Center Pune is very much popular among the tourists. A smooth check-in/check-out process, flexible policies and friendly management garner great customer satisfaction for this property. The Hotel has standard Check-In time as 02:00 PM and Check-Out time as 12:00 PM.
                        
                        </p>
                        {/* ... Other paragraphs */}
                    </div>
                    {/* Four boxes */}
                    <div className="flex gap-5 mt-4">
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
                    </div>
                </div>
            </div>


    );
};

export default Overview;
