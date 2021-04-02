import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cart from '../components/cart';
const MyProject = () =>{
    const ref= React.createRef();
    const scroll=(scroll,interval,distance)=>{
        let scrollAmount=0;
        const sliderTime=setInterval(()=>{
            ref.current.scrollLeft+=scroll;
            scrollAmount+=Math.abs(scroll);
            if(scrollAmount>=distance)clearInterval(sliderTime)
        },interval);        
    }
    return(
        <div className="flex w-full min-h-screen from-gray-400 via-white to-gray-400 bg-gradient-to-b">
            <div className="flex flex-col items-center w-full ">
                <div className="flex flex-col items-center p-5">
                    <b className="m-2 text-3xl">My Porject</b>
                    <p className="m-2 text-2xl text-center">This Is My Project Which I Do In My Life As Programmer</p>
                </div>                              
                <div className="flex w-full ">
                    <div ref={ref} className="flex max-w-full py-4 mx-2 overflow-hidden "> 
                        <Cart/>
                        <Cart/>
                        <Cart/>
                        <Cart/>
                        <Cart/>
                    </div>
                </div>   
                <div className="flex">
                    <div className="flex items-center">
                        <button onClick={()=>scroll(-25,30,100)} className="m-2 cursor-pointer focus:outline-none hover:scale-125"><FontAwesomeIcon size="3x" icon={['fas', 'chevron-circle-left']} /></button>
                    </div>
                    <div className="flex items-center">
                        <button onClick={()=>scroll(25,30,100)} className="m-2 cursor-pointer focus:outline-none hover:scale-125"><FontAwesomeIcon size="3x" icon={['fas', 'chevron-circle-right']} /></button>
                    </div>
                </div>                   
            </div>
        </div>
    );
}
export default MyProject;
