


import React, { PureComponent, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';

function Statistics() {
    const [donations, setDonations] = useState([]);

    const data = useLoaderData()
    const total = data.reduce((sum, item) => sum + item.price, 0)
    console.log(total)

    const donate = parseInt(donations.reduce((sum, item) => sum + item.price, 0))


    const donation = [
        {

            mark: total,
        },
        {

            mark: donate,
        },

    ]
    const COLORS = ['#0088FE', '#00C49F',];

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donate'));
        if (donationItems) {
            setDonations(donationItems)
        }
        else {
            setNoFound('No data found')
        }

    }, []);




    return (
        <div className='my-container'>
            <PieChart className='ml-96 mt-28' width={300} height={300} >
                <Pie
                    dataKey="mark"
                    startAngle={360}
                    endAngle={0}
                    data={donation}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#FFBB28"
                    label
                />
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}

            </PieChart>
        </div>
    );
};

export default Statistics;
