import React from 'react';
import bluesetting from "../../assets/bluesetting.png";
import { AiOutlineCalendar } from 'react-icons/ai';
import { FaAngleDown } from 'react-icons/fa';
import EmployeeDetails from '../../Components/EmployeeDetails/EmployeeDetails';
import Pagination from '../../Components/Pagination/Pagination';

const Attendance = () => {
    return (
        <div className='p-16 bg-[#f4f4f4] '>
            <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center ">
                <div>
                    <h4 className="text-primary lg:text-3xl ms:text-2xl sm:text-xl text-lg  font-bold">Attendance</h4>
                </div>
                <div className="flex justify-end items-center">
                    <button className="btn btn-sm btn-primary capitalize mr-8 text-white rounded">
                        Download Report
                    </button>
                    <div className="gear-icon">
                        <img src={bluesetting} className="w-8 h-8" alt="" />
                    </div>
                </div>
            </div>
            {/* Header Part Done */}

            <div className="mt-12">
                <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-3 gap-5 my-2">
                    <div className="flex justify-between shadow items-center bg-white px-5 py-4 rounded-lg border-2">
                        <p className="text-[#555555]">Jan 03, 2023</p>
                        <AiOutlineCalendar className='text-xl text-gray-400'></AiOutlineCalendar>
                    </div>
                    <div className="flex justify-between shadow items-center bg-white px-5 py-4  rounded-lg border-2">
                        <p className="text-[#555555]">Department</p>
                    </div>
                    <div className="flex justify-between shadow items-center bg-white px-5 py-4  rounded-lg border-2">
                        <p className="text-[#555555]">Attendance</p>
                        <FaAngleDown className='text-xl text-gray-400'></FaAngleDown>
                    </div>
                    <div className="flex justify-between shadow items-center bg-white px-5 py-4  rounded-lg border-2">
                        <p className="text-[#555555]">Present</p>
                        <FaAngleDown className='text-xl text-gray-400'></FaAngleDown>
                    </div>
                </div>
                <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-3 gap-5 mt-8">
                    <div className="flex justify-between shadow items-center bg-white px-5 py-4 rounded-lg border-2">
                        <p className="text-[#555555]">Check In</p>
                    </div>
                    <div className="flex justify-between shadow items-center bg-white px-5 py-4  rounded-lg border-2">
                        <p className="text-[#555555]">Location</p>
                    </div>
                    <div className="flex justify-between shadow items-center bg-white px-5 py-4  rounded-lg border-2">
                        <p className="text-[#555555]">Designation</p>
                        <FaAngleDown className='text-xl text-gray-400'></FaAngleDown>
                    </div>
                    <div className="flex justify-between shadow items-center bg-white px-5 py-4  rounded-lg border-2">
                        <p className="text-[#555555]">Department</p>
                        <FaAngleDown className='text-xl text-gray-400'></FaAngleDown>
                    </div>
                </div>
            </div>
            {/* Date Section done */}

            <div className='bg-white'>
                <div>
                    <EmployeeDetails></EmployeeDetails>
                </div>
                {/* Employee Details End */}

                <div className='p-10'>
                    <Pagination></Pagination>
                </div>
                {/* Employee Details End */}
            </div>


        </div>
    );
};

export default Attendance;