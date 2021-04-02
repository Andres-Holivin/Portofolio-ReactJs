import React, { useEffect, useState } from 'react';
import bg from '../../assets/images/profile.jpg';
import NavBar from "./navBar";
import navBarValue from "../../configs/navBarValue";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Nav=(props)=>{
  const About ={
    href:"/"
  }
  return (
    <div className="absolute z-20">
      <div onClick={props.onClick} className="p-2 px-4 m-2 bg-gray-200 rounded-lg cursor-pointer md:fixed max-w-min">
          <FontAwesomeIcon size="2x" icon={['fas', 'bars']} />
      </div>
      <div className={`${props.show===false?'h-0 md:w-0 duration-700':'h-72 full md:w-64 duration-700'} z-20 w-screen absolute overflow-x-hidden flex md:fixed flex-col top-0 text-gray-700 md:min-h-full from-blue-100 to-blue-500 bg-gradient-to-b`} >        
        <div className="flex justify-end md:m-2 ">
          <div onClick={props.onClick} className="p-2 px-3 cursor-pointer min-w-min rounded-xl">
            <FontAwesomeIcon size="2x" icon={['fas', 'times']} />
          </div>          
        </div>
        <div className="flex flex-row items-center justify-center md:px-8 md:py-4 md:flex-col">
          <img src={bg} className="mr-4 rounded-full md:m-0 w-14 md:w-44" alt="profile"/>
          <a href={{About}} className="font-sans text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg md:mt-8 dark-mode:text-white focus:outline-none focus:shadow-outline">Andres Holivin</a>
        </div>
        <nav className="justify-center flex-grow px-4 pb-4 md:block md:pb-0 md:overflow-y-auto" onClick={props.onClick}>
          {navBarValue ? 
            navBarValue.map((data,key)=>
              <NavBar navbar={data} key={key}/>                  
            )
          :""}
        </nav>
      </div>
    </div>
  );
}
export default Nav;
