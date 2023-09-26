import React from 'react'

function MyCard({ donation }) {

    const { id, picture, title, category, description, price } = donation || {}


    return (
        <div className=''>
            <div className=
                {
                    category === "Health" && 'bg-blue-200' ||
                    category === "Education" && 'bg-red-200' ||
                    category === "Clothing" && 'bg-green-100' ||
                    category === "Food" && 'bg-rose-100'
                }
            >

                <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl text-gray-700 shadow-md">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none text-gray-700">
                        <img
                            src={picture}
                            alt="image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className='ml-4' >
                        <div className="">
                            <h6 className=
                                {
                                    category === "Health" && 'text-[#0052FF]' ||
                                    category === "Education" && 'text-[#FF444A]' || category === "Clothing" && 'text-[#79C23F]' || category === "Food" && 'text-[#F87147]'
                                }
                            >

                                {category}
                            </h6>
                        </div>
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {title}
                        </h4>
                        <p className=
                            {
                                category === "Health" && 'text-[#0052FF]' ||
                                category === "Education" && 'text-[#FF444A]' ||
                                category === "Clothing" && 'text-[#79C23F]' ||
                                category === "Food" && 'text-[#F87147]'
                            }
                        >
                            {price}
                        </p>
                        <a className="inline-block" href="#">
                            <div className='mt-6'>
                                <button className=
                                    {
                                        category === "Health" && 'bg-[#0052FF] text-white p-2 rounded' ||
                                        category === "Education" && 'bg-[#FF444A] text-white p-2 rounded' ||
                                        category === "Clothing" && 'bg-[#79C23F] text-white p-2 rounded' ||
                                        category === "Food" && 'bg-[#F87147] text-white p-2 rounded'
                                    }
                                    type="button"
                                >
                                    View details

                                </button>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MyCard