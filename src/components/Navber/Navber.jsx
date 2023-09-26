import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'


function Navber() {
    return (
        <div className=' w-[1280px]'>

            <nav className='flex justify-between items-center py-7 px-5 shadow-md'>
                <Logo></Logo>
                <ul className='flex gap-5'>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600" : ""
                            }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Navber