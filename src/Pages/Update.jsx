import { updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Update = (props) => {
    const {auth} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleUpdate = (e) =>{
        e.preventDefault();
        const name= e.target.name.value;
        const photoUrl= e.target.photo.value;
        
        updateProfile(auth.currentUser,{
                        displayName:name,photoURL:photoUrl
                      })
                      .then(()=>navigate("/dashboard"))
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Update Now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form id='form' onSubmit={handleUpdate} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name='photo' placeholder="PhotoURL" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6 flex flex-col">
                            <button className='btn btn-primary w-full mt-2'>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;