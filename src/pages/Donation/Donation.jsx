import React, { useEffect, useState } from 'react'
import DonationCard from './DonationCard';
import MyCard from '../MyCard/MyCard';

function Donation() {

    const [donations, setDonations] = useState([]);
    const [noFound, setNoFound] = useState(false);

    const [isShow, setIsShow] = useState(false)


    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donate'));
        if (donationItems) {
            setDonations(donationItems)
        }
        else {
            setNoFound('No data found')
        }

    }, []);

    console.log(isShow)

    const handleRemove = () => {
        localStorage.clear()
        setDonations([]);
        setNoFound('No data found')

    }

    return (
        <div>{noFound ? (<p className='h-[80vh] flex justify-center items-center'>{noFound}</p>
        ) : (

            <div>
                {
                    donations.length > 0 && (
                        <button onClick={handleRemove}
                            className='rounded-md px-5 bg-blue-500 block mx-auto'
                        >
                            Delete All Donation
                        </button>
                    )
                }

                <div className='grid grid-cols-1  md:grid-cols-2 gap-5 mt-8'>
                    {
                        isShow ? donations.map((donation) => (<MyCard key={donation.id} donation={donation}></MyCard>))
                            : donations.slice(0, 4).map((donation) => (<MyCard key={donation.id} donation={donation}></MyCard>))
                    }

                </div>
                {
                    donations.length > 4 && <button onClick={() => setIsShow(!isShow)} className='px-5 mt-4 bg-[#009444] block rounded-md text-white mx-auto'>
                        {isShow ? "Seel Lass" : "See more"}
                    </button>
                }
            </div>

        )}</div>
    )


}

export default Donation