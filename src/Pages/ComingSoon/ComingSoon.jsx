import React from 'react';
import comingsoon from "../../assets/comingsoon.png"

const ComingSoon = () => {
    return (
        <div className='p-16 bg-[#f4f4f4] h-[600px] flex justify-center items-center'>
            <div>
                <div className="comingsoon-pic flex justify-center">
                    <img className='w-48 h-40' src={comingsoon} alt="" />
                </div>
                <h2 className='text-primary text-4xl font-bold mt-5'>This Page Will Coming Soon</h2>
            </div>
        </div>
    );
};

export default ComingSoon;