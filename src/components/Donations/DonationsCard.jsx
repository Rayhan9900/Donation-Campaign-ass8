import React from 'react'
import { Link } from 'react-router-dom'

function DonationsCard({ donation }) {

    const { id, picture, title, category, description } = donation || {}


    return (
        <Link to={`/donations/${id}`}>
            <div className={category === "Health" && 'bg-blue-200' || category === "Education" && 'bg-red-200' || category === "Clothing" && 'bg-green-100' || category === "Food" && 'bg-rose-100'}>
                <div className="relative  rounded-xl w-80  bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mx-4 mb-5   overflow-hidden rounded-xlbg-clip-border text-gray-700">
                        <img
                            src={picture}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <div className={category === "Health" && 'text-[#0052FF]' || category === "Education" && 'text-[#FF444A]' || category === "Clothing" && 'text-[#79C23F]' || category === "Food" && 'text-[#F87147]'}>
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                                {category}
                            </p>

                        </div>
                        <p className={category === "Health" && 'text-[#0052FF]' || category === "Education" && 'text-[#FF444A]' || category === "Clothing" && 'text-[#79C23F]' || category === "Food" && 'text-[#F87147]'}>
                            {title}
                        </p>
                    </div>
                    {/* <div className="p-6 pt-0">
                    <button
                        className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Add to Cart
                    </button>
                </div> */}
                </div>
            </div >
        </Link>
    )
}

export default DonationsCard