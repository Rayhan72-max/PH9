import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useParams } from 'react-router-dom';

const Dashboard = (props) => {
    const { user } = useContext(AuthContext);

    
    
    return (
        <div className='bg-[url("../../src/assets/Winter/whtbg.png")]'>
            <h1 className='text-3xl font-bold'>Welcome {user.displayName}</h1>

            <div className="card bg-base-100 w-96  mx-auto shadow-xl mt-2">
                <figure>
                    <img
                        src={user.photoURL}
                        alt="image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{user.displayName}</h2>
                    <h2 className="card-title">Email : {user.email}</h2>
                    <h2 className="card-title">Phone : {user.phone}</h2>                    
                    <div className="card-actions justify-end">
                        <Link to={"/update"}><button className="btn btn-primary mx-auto">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;