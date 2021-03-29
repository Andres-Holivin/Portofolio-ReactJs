import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Nav from "./components/nav";

import navBarValue from "../configs/navBarValue";

import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab, far, fas);

function App() {
  const [sideBar,setSideBar]=useState(true);
  return (    
    <Router>
       <div >  
        <div className="flex flex-col w-full md:flex md:flex-row md:min-h-screen">
          <Nav show={{sideBar}} click={()=>setSideBar(!sideBar)}/>
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
