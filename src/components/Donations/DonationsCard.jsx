import React from 'react'
import { Link } from 'react-router-dom'

function DonationsCard({ donation }) {

    const { id, picture, title, category, description } = donation || {}


    return (
        <Link to={`/donations/${id}`}>

            <div className={category === "Health" && 'bg-blue-200' || category === "Education" && 'bg-red-200' || category === "Clothing" && 'bg-green-100' || category === "Food" && 'bg-rose-100'} >
                <div className="  rounded-xl   bg-clip-border text-gray-700 shadow-md">
                    <div className="mt-5  rounded-xlbg-clip-border text-gray-700">
                        <img
                            src={picture}
                            className="h-full w-full "
                        />
                    </div>
                    <div className="gap-5">
                        <div className={category === "Health" && 'text-[#0052FF]' || category === "Education" && 'text-[#FF444A]' || category === "Clothing" && 'text-[#79C23F]' || category === "Food" && 'text-[#F87147]'}>
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                                {category}
                            </p>

                        </div>
                        <p className={category === "Health" && 'text-[#0052FF]' || category === "Education" && 'text-[#FF444A]' || category === "Clothing" && 'text-[#79C23F]' || category === "Food" && 'text-[#F87147]'}>
                            {title}
                        </p>
                    </div>

                </div>
            </div >

        </Link>
    )
}

export default DonationsCard