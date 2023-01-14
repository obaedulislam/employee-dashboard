import React from 'react';
import './TaskSummary.css'

const TaskSummary = () => {
    return (
        <div className="">
            <h3 className="text-secondary text-xs font-bold  mb-6">Task Summary</h3>
            <div className="  border-[3px] border-dashed border-blue-400 rounded-xl p-6 md:w-1/2">
                <p className='text-sm text-accent mb-1'>Total task</p>
                <p className="text-lg font-bold">112</p>

                <div>
                    <div className="mt-5">
                        <p className='text-sm text-accent mb-2'>Completed</p>
                        <div className="progress-bar ">
                            <p className={`after:w-[50%] `}>
                                <span className="font-semibold text-gray-500">50</span> /80
                            </p>
                        </div>
                    </div>
                    <div className="mt-[28px]">
                        <p className='text-sm text-accent mb-2'>In Progress</p>
                        <div className="progress-bar ">
                            <p className="font-semibold after:w-[9%] ">15 /112</p>
                        </div>
                    </div>
                    <div className="mt-[28px]">
                        <p className='text-sm text-accent mb-2'>Pending</p>
                        <div className="progress-bar ">
                            <p className=" font-semibold after:w-[20%]">30 /80</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskSummary;