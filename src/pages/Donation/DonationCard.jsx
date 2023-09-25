import React from 'react'
import { Link } from 'react-router-dom';

function DonationCard({ donation }) {

    const { id, picture, title, category, description, price } = donation || {}

    const handleDonate = () => {

        const addedDonateArray = [];

        const donationItems = JSON.parse(localStorage.getItem('donate'));

        if (!donationItems) {
            addedDonateArray.push(donation);
            localStorage.setItem('donate', JSON.stringify(addedDonateArray))
            alert("alrady click")
        }
        else {
            addedDonateArray.push(...donationItems, donation);
            localStorage.setItem('donate', JSON.stringify(addedDonateArray))
            alert("alrady click")
        }

        // localStorage.setItem('test', JSON.stringify([{ name: 'rayhan' }, { name: 'mahmud' }]))
    }


    return (
        <div>

            <div className="  rounded-xl  bg-clip-border  shadow-md">
                <div className=" ">
                    <img src={picture} alt="profile-picture" />
                </div>

                <div >
                    <button onClick={handleDonate} className={category === "Health" && 'bg-blue-500' || category === "Education" && 'bg-red-500' || category === "Clothing" && 'bg-green-500' || category === "Food" && 'bg-rose-500' || 'w-1/2'}>Donate:{price}</button>
                </div>

                <div className="p-6 ">
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p className="">
                        {description}
                    </p>
                </div>

            </div>
        </div >
    )
}

export default DonationCard;