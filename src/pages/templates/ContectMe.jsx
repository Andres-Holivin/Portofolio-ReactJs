import { useState } from "react";
import axios from 'axios';
import PopUp from '../components/popup';
const ContectMe = () =>{
    const [Name, setName] = useState();
    const [Mail, setMail] = useState();
    const [Title, setTitle] = useState();
    const [Message, setMessage] = useState();
    const [popUpLoding,setPopUpLoding]=useState(false);
    const [PopUpText,setPopUpText]=useState(false);
    const ContectMe=(e)=>{
        e.preventDefault();
        if(Validation()){
            setPopUpLoding(true);
            axios({
                method:"POST",
                url:' https://api-python-apps.herokuapp.com/sendemail',
                data:{
                    Title:Title,
                    Email:Mail,
                    Name:Name,
                    Message:Message
                }
            }).then(res=>{
                setPopUpLoding(false);
                if(res.data==="success"){
                    setPopUpText(true);
                }
                
            })
            .catch(error=>{
                console.log(error.message);
            })
        }            
    }
    const Validation = () => {
        if(!Name||!Mail||!Title||!Message){
            return false;        
        }else{
            return true;
        } 
    }    
    return(
        <>
            <PopUp visible={popUpLoding} type="loding"/>
            <PopUp visible={PopUpText} click={()=>setPopUpText(!PopUpText)} type="announcement" text="This message will be sent to my Email. Thanks for the message."/>
            <div className="flex w-full min-h-screen from-gray-400 via-white to-gray-400 bg-gradient-to-b">
                <div className="flex flex-col items-center w-full ">
                    <div className="flex flex-col items-center p-11">
                        <b className="m-2 text-3xl">Contact Me</b>
                        <p className="m-2 text-2xl text-center">You can send a message or send input to me via the form below.</p>
                    </div>   
                    <form className="w-full" onSubmit={e=>ContectMe(e)} autoComplete="off">
                        <div style={{gridTemplateRows:'auto auto auto'}} className="grid grid-rows-3 p-3 my-4 bg-gray-200 border-4 rounded-xl mx-60 ">
                            <div className="grid grid-cols-2">
                                <div className="w-full p-4">
                                    <p className="mx-1 my-2">Name</p>
                                    <input onChange={e=>setName(e.target.value)} className="w-full p-3 rounded-2xl focus:outline-none" type="text"/>
                                </div>
                                <div className="w-full p-4">
                                    <p className="mx-1 my-2">E-Mail</p>
                                    <input onChange={e=>setMail(e.target.value)} className="w-full p-3 rounded-2xl focus:outline-none" type="Email"/>
                                </div>
                            </div>
                            <div className="w-full p-4">
                                <p className="mx-1 my-2">Title</p>
                                <input onChange={e=>setTitle(e.target.value)} className="w-full p-3 focus:outline-none rounded-2xl" type="text"/>
                            </div>
                            <div className="w-full p-4">
                                <p className="mx-1 my-2">Message</p>
                                <textarea onChange={e=>setMessage(e.target.value)} className="w-full h-56 p-3 resize-none focus:outline-none rounded-2xl" type="text"/>   
                            </div>                        
                        </div>  
                        
                        <div className="flex justify-center m-4">
                            <input type="submit" className="px-4 py-2 font-sans text-xl text-white transition transform bg-yellow-500 cursor-pointer hover:scale-105 rounded-2xl focus:outline-none" value="Send Message"/>                            
                        </div>
                    </form>     
                </div>
            </div> 
        </>
    );
}
export default ContectMe;