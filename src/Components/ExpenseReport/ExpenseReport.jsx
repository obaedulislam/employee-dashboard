import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const graphData = [
    {
        name: 'Nov 1',
        uv: 2000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Nov 4',
        uv: 1200,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Nov 8',
        uv: 2200,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Nov 12',
        uv: 480,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Nov 16',
        uv: 2890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Nov 24',
        uv: 1900,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Nov 28',
        uv: 3000,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Nov 30',
        uv: 600,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Nov 20',
        uv: 4000,
        pv: 4300,
        amt: 2100,
    },

];

const ExpenseReport = () => {
    return (
        <div>
            <h5 className="mb-3 font-bold">Expense Report</h5>
            <div className="bg-white rounded p-8">
                <div className="flex lg:flex-row md:flex-row flex-col-reverse justify-between items-center">
                    <div>
                        <ul className="flex text-xs font-semibold space-x-5 text-[#bcbcbc]">
                            <li className="text-xs font-semibold mr-2 text-secondary">Day</li>
                            <li className="text-xs font-semibold mr-2">Week</li>
                            <li className="text-xs font-semibold mr-2">Month</li>
                            <li className="text-xs font-semibold mr-2">Year</li>
                        </ul>
                    </div>
                    <button className="py-2 px-7 shadow-lg bg-primary rounded-xl lg:mb-0 mb-2 text-white capitalize">
                        Export Details
                    </button>
                </div>
                <div className='my-8'>
                    <h2 className="text-3xl font-bold text-secondary"><span className='text-3xl'>৳</span>45,000</h2>
                    <div className="graph mt-10">
                        <ResponsiveContainer height={230}>
                            <AreaChart
                                width={500}
                                height={150}
                                data={graphData}
                                margin={{
                                    top: 0,
                                    right: 20,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop
                                            offset="5%"
                                            stopColor="#4f48d8be"
                                            stopOpacity={1}
                                        />
                                        <stop
                                            offset="95%"
                                            stopColor="#8884d873"
                                            stopOpacity={0.1}
                                        />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <Tooltip />
                                <Area
                                    type="monotone"
                                    dataKey="uv"
                                    stroke="#1509f0fd"
                                    fill="url(#colorUv)"
                                    strokeWidth={3}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ExpenseReport;