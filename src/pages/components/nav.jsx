import React, { useEffect, useState } from 'react';
import bg from '../../assets/images/profile.jpg';
import NavBar from "./navBar";
import navBarValue from "../../configs/navBarValue";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Nav=(props)=>{
  useEffect(() => {
    return () => {
      console.log(props.onClick);
      console.log("this props "+props.show);
    }
  },)
  const About ={
    href:"/"
  }
  return (
    <div className="absolute z-10">
      <div onClick={props.onClick} className="p-2 px-4 m-2 bg-gray-200 rounded-lg cursor-pointer md:fixed max-w-min">
          <FontAwesomeIcon size="2x" icon={['fas', 'bars']} />
      </div>
      <div className={`${props.show===false?'w-0':'w-64'} left-0 overflow-x-hidden flex fixed flex-col top-0 text-gray-700 h-full from-blue-100 to-blue-500 bg-gradient-to-b`} >
        <div className="flex justify-end m-2 ">
          <div onClick={props.onClick} className="p-2 px-3 cursor-pointer min-w-min rounded-xl">
            <FontAwesomeIcon size="2x" icon={['fas', 'times']} />
          </div>          
        </div>
        <div className="flex flex-row items-center justify-center px-8 py-4">
          <img src={bg} className="rounded-full w-44" alt="profile"/>
        </div>
        <div className="flex flex-row items-center justify-center px-8 py-4">
          <a href={{About}} className="font-sans text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Andres Holivin</a>
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
