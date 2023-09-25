import React from 'react'
import Banner from '../../components/Header/Banner/Banner'
import Donations from '../../components/Donations/Donations'
import { useLoaderData } from 'react-router-dom'

function Home() {

    const donations = useLoaderData();




    return (
        <div>
            <Banner></Banner>
            <Donations donations={donations}></Donations>


        </div>
    )
}

export default Home