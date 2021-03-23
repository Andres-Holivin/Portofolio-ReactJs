import { useState } from "react";

const Config=()=>{
    const [value,setValue]=useState();
    const [visible,setVisible]=useState(true);
    const login=(e)=>{
        e.preventDefault();
        if(value==='hello'){
            setVisible(false);
        }
    }
    return (
        <div className="flex items-center justify-center h-screen md:h-full">
            <form onSubmit={login} className={visible?"block":"hidden"}>
                <div className="flex flex-col p-10 bg-gray-300 md:flex-row">                    
                    <input onChange={e=>setValue(e.target.value)}  className="p-3 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent" type="password"/>
                    <div className="flex items-center justify-center w-full mt-3 font-sans text-xl text-white bg-blue-400 rounded-lg cursor-pointer md:m-0 md:ml-5 md:w-24 hover:bg-blue-500">
                        <button className="w-full p-3 focus:outline-none" onClick={login} type="submit">Login</button>
                    </div> 
                </div>            
            </form>        
            <div className={visible?"hidden":"block"}>
                <div>
                    
                </div>
            </div>
        </div>
    );
}
export default Config;