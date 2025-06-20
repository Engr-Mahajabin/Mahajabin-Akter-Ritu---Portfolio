import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navOptions = (
        <>
            <li><Link to='/' className="hover:text-blue-400">Home</Link></li>
            <li><Link to='/about' className="hover:text-blue-400">About</Link></li>
            <li><Link to='/skills' className="hover:text-blue-400">Skills</Link></li>
            <li><Link to='/resume' className="hover:text-blue-400">Resume</Link></li>
            <li><Link to='/projects' className="hover:text-blue-400">Projects</Link></li>
            <li><Link to='/contact' className="hover:text-blue-400">Contact</Link></li>
        </>
    );

    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl mx-auto text-white bg-black shadow-sm p-6 font-bold">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl text-bold">Ritu.</a> */}
                <Link to='/' className="text-2xl text-bold hover:text-blue-400">Ritu.</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {navOptions}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;