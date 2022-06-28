import React from 'react'
import {useState} from 'react';
import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';

import logo from '../../images/logo.png';

// we pass data to components using props
const NavbarItem = ({title, classProps}) =>{         //this component will accept some Props(which is an object) // it is taking in Two Data in form of properties(title and classProps)
  return(
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  );
}

const Navbar = () => {
  const  [toggleMenu, setToggleMenu] = useState(false); // created a state named- toggleMenu ans initial valueof state is false . the Function 

  return (
    <nav className="w-full flex md:justify-center justify-between items-center">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className='w-32 cursor-pointer'/>
      </div>
      <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>      
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (          //THIS IS FOR DESKTOP NAVIGATION MENU AND menu items. It is set to hidden for mobile devices
            <NavbarItem key={item + index} title={item}/>         // This is where the props is used
        ))}
        <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
          Login
        </li>
      </ul>
      <div className="flex relative"> 
        {toggleMenu     // Using a Tenary operator(To check if the toggleMenu is currently turned on)[APPLICATION OF STATES IN REACT]
          ?<AiOutlineClose fontSize={28}  className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)}/>    //1. This is for the toggle menu(To change from open to close and vice versa).     i.e if it's turned on, render the AioutlineClose icon, else render the HimenuAlt4 icon       
          :<HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />       // Create a Call-Back function
        } 
         
        {toggleMenu && (  // 2. this is for the Navigation Bar for Mobile. (But i think is the Mobile Navigation)
          <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
            <li className='text-xl w-full my-2'>
              <AiOutlineClose onClick={() => setToggleMenu(false)} /> 
            </li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
            <NavbarItem key={item + index} title={item} classProps="my-2 text-lg"/>                              // This is where the props (classProps) is used
        ))} 
          </ul>
        )
        }
      </div>
    </nav> 
  )
}

export default Navbar