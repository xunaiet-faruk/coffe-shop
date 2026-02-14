import React from 'react';

const Banner = () => {
    return (
     
        <div
            className="hero min-h-screen container mx-auto"
            style={{
                backgroundImage:
                    "url(/images/more/banner.png)",
            }}
        >
            
            <div className=" text-neutral-content ">
                <div className="ml-122.5 space-y-5">
                    <h1 className="mb-5 text-4xl font-semibold italic">Would You like a cup of dalicius cup of coffe</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda  <br/>
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="text-black py-1 px-2 rounded-md bg-orange-300 text-sm font-bold italic">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;