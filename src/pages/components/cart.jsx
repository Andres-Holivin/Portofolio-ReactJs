import img from '../../assets/images/Screenshot_4.png'
const Cart = (props) =>{
    return(
        <div className="whitespace-normal">
            <div style={{height:"350px",width:"250px"}} className="flex m-4 transform hover:-translate-y-4 ">            
                <div style={{gridTemplateRows:'40% 60%'}} className="grid grid-rows-2 overflow-hidden bg-white rounded-lg shadow-lg ">
                    <img className="w-full h-full" src={img} alt="img"/>
                    <div style={{gridTemplateRows:'30px 120px 50px'}} className="grid h-full grid-rows-3 px-2 py-1">
                        <p className="text-xl font-bold ">Project HCI</p>
                        <p className="text-sm text-gray-700">
                            I created this website for college assignments.
                        </p>
                        <div className="flex justify-center py-1">
                            <input onClick={()=>{window.location="http://project-lab-hci.surge.sh"}} className="px-5 py-2 bg-gray-100 rounded-md shadow-lg cursor-pointer focus:outline-none hover:bg-gray-200" type="button" value="Visit"/>
                        </div>
                    </div>                
                </div>
            </div> 
        </div>
       
    );
}
export default Cart;