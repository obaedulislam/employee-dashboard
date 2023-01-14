import React from 'react';
import { FaUsers } from 'react-icons/fa';
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";


const CompanyInfo = ({ cStatus }) => {
    const { title, totalEmployee } = cStatus;

    return (
        <div className="bg-white rounded-md p-6 mt-6">
            <div className="flex items-center">
                <FaUsers></FaUsers>
                <span className="ml-2 text-[#A5A5A5] text-xs"  >
                    {title}
                </span>
            </div>
            <div className="flex justify-between items-center mt-8">
                <h2 className="text-4xl font-bold text-secondary">{totalEmployee}</h2>
                <button className="px-5 py-2  text-xs text-white btn-primary rounded-lg ">
                    View All
                </button>
            </div>
            <hr className="mt-10" />
            <div className='mt-4'>
                <div className="avatar-group -space-x-3">
                    <div className="avatar">
                        <img className='w-8 h-8' src={img1} alt="" />
                    </div>
                    <div className="avatar">
                        <img className='w-8 h-8' src={img2} alt="" />
                    </div>
                    <div className="avatar">
                        <img className='w-8 h-8' src={img3} alt="" />
                    </div>
                    <div className="avatar">
                        <img className='w-8 h-8' src={img4} alt="" />
                    </div>
                    <div className="avatar">
                        <img className='w-8 h-8' src={img5} alt="" />
                    </div>
                    <div className="avatar">
                        <img className='w-8 h-8' src={img6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyInfo;