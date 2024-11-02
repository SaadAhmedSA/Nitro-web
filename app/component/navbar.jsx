"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


const Navbar = () => {
  const [bgColor, setBgColor] = useState('transparent');
  const [Color, setColor] = useState('white');

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 50) {
      setBgColor('white'); 
      setColor("black")// Change this color as needed
    } else {
      setBgColor('transparent');
      setColor("white")
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="navbar px-10 h-15 border-b-2" style={{backgroundColor:bgColor ,position:"fixed" ,top:0,color:Color}}>
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a>Home</a></li>
          <li>
            <Link href='#about'>About us</Link>
           
          </li>
          <li><a>Portfolio</a></li>
          <li><a>Service</a></li>
        </ul>
      </div>
      <a className="text-4xl font-bold">Nitro.</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a>Home</a></li>
        <li>
         
            <summary><Link href={'#about'}>About us</Link></summary>
           
      
        </li>
        <li><a>Portfolio</a></li>
        <li><a>Service</a></li>
        <li><a>Testimonails</a></li>
        <li><a>Blogs</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
  
  </div>
  );
};

export default Navbar;
