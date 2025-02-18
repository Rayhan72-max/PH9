import React, { useContext } from 'react';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Forget = (props) => {
    const {forgetPass} = useContext(AuthContext);
    const navigate = useNavigate();
    const {email} = useParams();
    

    const handleReset=(e)=>{
            e.preventDefault();
            const email = document.getElementById("form");
            forgetPass(email.email.value);
            window.location.href = "https://mail.google.com/"
        }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Reset Now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form id='form' onSubmit={handleReset} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" defaultValue={email} required />
                            </div>
                            <div className="form-control mt-6 flex flex-col">
                            <button className='btn btn-primary w-full mt-2'>Forget Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forget;