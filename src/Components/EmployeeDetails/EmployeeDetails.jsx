import React from 'react';
import { FaEye } from 'react-icons/fa';
import { useLoaderData } from 'react-router';
import doc from "../../assets/doc.png";

const EmployeeDetails = () => {

    const employeesTable = useLoaderData();
    console.log(employeesTable);

    return (
        <div className="mt-[60px]">
            <div className="overflow-x-auto w-full bg-white p-3 rounded">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th className="bg-white border-b-2 w-[30px]">
                                <label>
                                    <input type="checkbox" />
                                </label>
                            </th>
                            <th className="bg-white font-semibold text-slate-400 border-b-2">
                                Employee Name
                            </th>
                            <th className="bg-white font-semibold text-slate-400 border-b-2">
                                Department
                            </th>
                            <th className="bg-white font-semibold text-slate-400 border-b-2">
                                Check In
                            </th>
                            <th className="bg-white font-semibold text-slate-400 border-b-2">
                                Check Out
                            </th>
                            <th className="bg-white font-semibold text-slate-400 border-b-2">
                                Remarks
                            </th>
                            <th className="bg-white font-semibold text-slate-400 border-b-2">
                                Hours
                            </th>
                            <th className="bg-white font-semibold text-slate-400 border-b-2">
                                Overtime
                            </th>
                            <th className="bg-white font-semibold text-slate-400 border-b-2">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {(
                            employeesTable[0]?.employeeStatus?.map((employee, i) => (
                                (i % 2 === 1) ? <tr key={employee.id} className="hover">
                                    <th>
                                        <label>
                                            <input type="checkbox" />
                                        </label>
                                    </th>
                                    <td>Jahid Hasan</td>
                                    <td>HR & Admin</td>
                                    <td>
                                        <span className="bg-accent text-sm rounded-[10px] px-2 text-white">{employee?.checkIn}</span>
                                    </td>
                                    <td>
                                        <span className="bg-accent text-sm rounded-[10px] px-2 text-white">{employee?.checkOut}</span>
                                    </td>
                                    <td>
                                        <img src={doc} className="w-6 h-7" alt="" />
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <th>
                                        <button className="btn btn-primary btn-outline border-0 btn-xs text-lg">
                                            <FaEye className=''></FaEye>
                                        </button>
                                    </th>
                                </tr>
                                    :
                                    <tr key={employee.id} className="hover">
                                        <th>
                                            <label>
                                                <input type="checkbox" />
                                            </label>
                                        </th>
                                        <td>Jahid Hasan</td>
                                        <td>HR & Admin</td>
                                        <td>
                                            <span className="bg-[#4AA785] text-sm rounded-[10px] px-2 text-white">{employee?.checkIn}</span>
                                        </td>
                                        <td>
                                            <span className="bg-[#4AA785] text-sm rounded-[10px] px-2 text-white">{employee?.checkOut}</span>
                                        </td>
                                        <td>

                                        </td>
                                        <td></td>
                                        <td></td>
                                        <th>
                                            <button className="btn btn-primary btn-outline border-0 btn-xs text-lg">
                                                <FaEye className=''></FaEye>
                                            </button>
                                        </th>
                                    </tr>

                            ))
                        )}
                    </tbody>
                </table>


            </div>
        </div>
    );
};

export default EmployeeDetails;