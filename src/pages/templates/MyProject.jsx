import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cart from '../components/cart';

const MyProject = () =>{
    const ref= React.createRef();
    const scroll=(scroll)=>{
        ref.current.scrollLeft+=scroll;
    }
    return(
        <div className="flex w-full h-full from-gray-400 via-white to-gray-400 bg-gradient-to-b">
            <div className="flex flex-col items-center w-full ">
                <div className="flex flex-col items-center p-14">
                    <b className="m-2 text-3xl">My Porject</b>
                    <p className="m-2 text-2xl text-center">This Is My Project Which I Do In My Life As Programmer</p>
                </div>   
                <div className="flex w-full ">
                    <div className="flex items-center">
                        <button onClick={()=>scroll(-30)} className="m-2 transition ease-out transform cursor-pointer focus:outline-none hover:scale-125"><FontAwesomeIcon size="3x" icon={['fas', 'chevron-circle-left']} /></button>
                    </div>
                    <div ref={ref} style={{scrollbarWidth:'none'}} className="flex max-w-full py-8 overflow-auto whitespace-nowrap over"> 
                        <Cart/>
                        <Cart/>
                        <Cart/>
                        <Cart/>
                        <Cart/>
                    </div>
                    <div className="flex items-center">
                        <button onClick={()=>scroll(30)} className="m-2 transition ease-out transform cursor-pointer focus:outline-none hover:scale-125"><FontAwesomeIcon size="3x" icon={['fas', 'chevron-circle-right']} /></button>
                    </div>
                    
                </div>                 
            </div>
            
        </div>
    );
}
export default MyProject;
