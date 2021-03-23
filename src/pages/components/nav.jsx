import React, { useState } from 'react';
import bg from '../../assets/images/profile.jpg';
import NavBar from "./navBar";
// import DropDownNavBar from "./dropDownNavBar";
// import firebase from "../../config/firebase/firebase";
import navBarValue from "../../configs/navBarValue";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Nav=()=>{
  const [sideBar,SetSideBar]=useState(true);
  const showBar =()=>{SetSideBar(false);console.log(sideBar)};
  const hideBar =()=>{SetSideBar(true);console.log(sideBar)};
  const About ={
    href:"/"
  }
  return (
    <div className="absolute z-40">
      <div onClick={showBar} className="p-2 px-4 m-2 bg-gray-200 rounded-lg cursor-pointer md:fixed max-w-min">
          <FontAwesomeIcon size="2x" icon={['fas', 'bars']} />
      </div>
      <div className={`${!sideBar?"left-0 duration-300":"-left-full duration-100"} flex md:fixed flex-col top-0 text-gray-700 h-full w-60 from-blue-100 to-blue-500 bg-gradient-to-b`} >
        <div className="flex justify-end m-2 ">
          <div onClick={hideBar} className="p-2 px-3 cursor-pointer min-w-min rounded-xl">
            <FontAwesomeIcon size="2x" icon={['fas', 'times']} />
          </div>          
        </div>
        <div className="flex flex-row items-center justify-center px-8 py-4">
          <img src={bg} className="rounded-full w-44" alt="profile"/>
        </div>
        <div className="flex flex-row items-center justify-center px-8 py-4">
          <a href={{About}} className="font-sans text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Andres Holivin</a>
        </div>
        <nav className="justify-center flex-grow px-4 pb-4 md:block md:pb-0 md:overflow-y-auto" onClick={hideBar}>
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