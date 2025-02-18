import React, { useContext } from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Navbar = (props) => {
    const {logOut,user} = useContext(AuthContext)
    const handleLogOut = () =>{
        logOut()
    }
    const location = useLocation();
    const isHome = location.pathname;
    
    
    
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Donation Campain', path: '/donation' },
        { id: 3, name: 'How to help', path: '/help' },
        { id: 4, name: 'Dashboard', path: '/Dashboard' }
    ]
    
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {routes.map(route => <Link to={route.path} className='mr-6'><a>{route.name}</a></Link> )}
                    </ul>
                </div>
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl text-blue-500">Winter Donation</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                    {routes.map(route => <Link to={route.path} className='mr-6 text-bold'><a>{route.name}</a></Link> )}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='rounded'><img src="" alt="" /></div>
                    {user===""?<Link to={"/login"}><button className="btn font-semibold">Log In</button></Link>:<div className='flex flex-row items-center gap-2 '> <img className='rounded' src={user.photoURL}></img> <button className="btn font-semibold" onClick={handleLogOut}>LogOut</button></div>}
                    
                    
                </div>
            </div>
        </div>

    );
};

export default Navbar;