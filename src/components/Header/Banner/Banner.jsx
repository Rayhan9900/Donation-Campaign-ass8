import React from 'react'

function Banner() {
    return (
        <div className=" bg-gradient-to-r from-white bg opacity-25 .">
            < div className='p-56 text-4xl flex justify-center items-center ' >
                <h2>I Grow By Helping People In Need</h2>
            </div >
            <div className='  flex justify-center items-center  '>
                <input className='p-2 rounded-md' type="Search" name="" placeholder='Search here....' id="" />
                <button className='bg-[#FF444A] rounded-md p-2 mr-10'>Search</button>
            </div>

        </div >
    )
}

export default Banner