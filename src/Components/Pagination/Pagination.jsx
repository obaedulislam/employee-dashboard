import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Pagination = () => {
    const [pagination, setPagination] = useState(2);

    return (
        <div className="flex justify-end  ">
            <div className="btn-group ">
                <button
                    onClick={() =>
                        pagination > 1 ? setPagination(pagination - 1) : ""
                    }
                    className="btn bg-white text-sm text-primary border-0 btn-sm hover:bg-accent hover:text-white"
                >
                    <FaAngleLeft></FaAngleLeft>
                </button>
                {[...Array(5)].map((item, i) => (
                    <div key={i}>
                        <button
                            onClick={() => setPagination(i + 1)}
                            className={` ${pagination === i + 1
                                ? "bg-neutral rounded-lg text-white"
                                : "bg-white"
                                }  btn-sm border-0 hover:rounded-[7px] hover:text-white hover:bg-neutral`}
                        >
                            <span className="text-[#1c1c1c] text-xs ">{i + 1}</span>
                        </button>
                    </div>
                ))}
                <button
                    onClick={() =>
                        pagination < 5
                            ? setPagination(pagination + 1)
                            : setPagination(5)
                    }
                    className="btn bg-white text-sm text-primary  border-0 btn-sm hover:bg-accent hover:text-white"
                >
                    <FaAngleRight></FaAngleRight>
                </button>
            </div>
        </div>
    );
};

export default Pagination;