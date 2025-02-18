import React, { useEffect, useState } from 'react';

import { Link, NavLink } from 'react-router-dom';

const Donation = (props) => {

    const [campaigns,setCampaign] = useState([]);

    useEffect(()=>{
        fetch("./donation.json")
        .then(res=>res.json())
        .then(data=>setCampaign(data))
    },[])

    return (
        <div>
            <h1 className='text-3xl font-semibold mb-4'>Our Campaigns:</h1>
            <div className='flex flex-col  lg:grid grid-cols-3 gap-y-2 p-2'>
                
            {campaigns.map(campain=>
                <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={campain.image}
                         />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{campain.title}</h2>
                    <p>{campain.description}</p>
                    <h2>{campain.division}</h2>
                    <div className="card-actions justify-center mt-2">
                        
                        <Link to={`/details/${campain.id}`}><button className="btn btn-primary">Donate Now</button></Link>
                    </div>
                </div>
            </div>
            )}
            </div>
            
            
        </div>
    );
};

export default Donation;