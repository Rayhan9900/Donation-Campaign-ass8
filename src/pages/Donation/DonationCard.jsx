import React from 'react'
import { Link } from 'react-router-dom';

import swal from 'sweetalert';

function DonationCard({ donation }) {

    const { id, picture, title, category, description, price } = donation || {}

    const handleDonate = () => {

        const addedDonateArray = [];

        const donationItems = JSON.parse(localStorage.getItem('donate'));

        if (!donationItems) {
            addedDonateArray.push(donation);
            localStorage.setItem('donate', JSON.stringify(addedDonateArray))
            swal("Good job!", "Donation added successfully!", "success");
        }
        else {

            const isExits = donationItems.find(donation => donation.id === id);

            if (!isExits) {
                addedDonateArray.push(...donationItems, donation);
                localStorage.setItem('donate', JSON.stringify(addedDonateArray))
                swal("Good job!", "Donation added successfully!", "success");
            }
            else {
                swal("Error!", "Donation no duplicate!", "error");
            }
        }
    }


    return (


        <div className="absolute  rounded-xl  bg-clip-border  shadow-md">

            <img className='w-56 lg:w-[1280px] lg:h-[580px] ' src={picture} alt="profile-picture" />

            <div className='relative bottom-12 lg:bottom-24 w-56 lg:w-[1280px] bg-black p-1 lg:p-8 rounded-md bg-opacity-30' >
                <div className=''>
                    <button onClick={handleDonate} className=
                        {
                            category === "Health" && 'bg-blue-500 text-white p-2 rounded' ||
                            category === "Education" && 'bg-red-500 text-white p-2 rounded' ||
                            category === "Clothing" && 'bg-green-500 text-white p-2 rounded' ||
                            category === "Food" && 'bg-rose-500 text-white p-2 rounded' || 'w-1/2'
                        }
                    >
                        Donate:{price}</button>
                </div>
            </div>

            <div className=" lg:w-[1280px]">
                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {title}
                </h4>
                <p className="">
                    {description}
                </p>
            </div>


        </div >

    )
}

export default DonationCard;