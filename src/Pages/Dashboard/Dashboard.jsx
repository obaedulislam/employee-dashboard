import React from 'react';
import { useLoaderData } from 'react-router';
import CompanyInfo from '../../Components/CompanyInfo/CompanyInfo';

const Dashboard = () => {

    const companyInfo = useLoaderData();
    console.log(companyInfo?.companyStatus);

    return (
        <div className='bg-[#f4f4f4] p-20'>
            <h1 className="text-4xl text-primary font-bold">Dashboard</h1>

            <div className='company-info'>
                <h5 className='text-secondary text-xs font-bold mt-10'>Company Status</h5>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-6'>
                    {
                        companyInfo[0]?.companyStatus?.map((cStatus, i) => <CompanyInfo
                            key={cStatus?.id}
                            cStatus={cStatus}
                        ></CompanyInfo>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Dashboard;