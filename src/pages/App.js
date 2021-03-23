import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Nav from "./components/nav";

import navBarValue from "../configs/navBarValue";

import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab, far, fas);

function App() {
  return (    
    <Router>
       <div >  
        <div className="flex-col w-screen h-screen md:flex md:flex-row md:min-h-screen">
          <Nav/>          
          <div className="w-full h-full">
            <Switch>
              {navBarValue? 
                navBarValue.map((data,id)=>
                  <Route 
                    key={id} 
                    path={data.Path} 
                    exact 
                    children={<data.Compenent/>}/>  
                )
              :" "}
            </Switch> 
          </div>
        </div>  
      </div>
    </Router>    
  );
}

export default App;
