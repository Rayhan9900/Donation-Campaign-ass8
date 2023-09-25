import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function SingleD() {

    const [donation, setDonation] = useState()

    const { id } = useParams()
    console.log(id);


    const donations = useLoaderData()
    // console.log(donations);

    useEffect(() => {
        const findSingle = donations?.find(donation => donation.id === id);
        // console.log(findSingle)

    }, [id, donations])


    return (
        <div>
            donation
        </div>
    )
}

export default SingleD