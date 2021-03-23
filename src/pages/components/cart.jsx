import img from '../../assets/images/coffeCup.jpg'
const Cart = () =>{
    return(
        <div className="whitespace-normal">
            <div style={{height:"350px",width:"250px"}} className="flex m-4 transform hover:-translate-y-4 flex-nowrap ">            
                <div style={{gridTemplateRows:'40% 60%'}} className="grid grid-rows-2 overflow-hidden bg-white rounded-lg shadow-lg ">
                    <img className="w-full h-full" src={img} alt="img"/>
                    <div style={{gridTemplateRows:'30px 120px 50px'}} className="grid h-full grid-rows-3 px-2 py-1">
                        <p className="text-xl font-bold ">Coffee</p>
                        <p className="text-sm text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum accusamus dolores ex veritatis sed laudantium.</p>
                        <div className="flex justify-center py-1">
                            <input className="px-5 py-2 bg-gray-100 rounded-md shadow-lg cursor-pointer focus:outline-none hover:bg-gray-200" type="button" value="Visit"/>
                        </div>
                    </div>                
                </div>
            </div> 
        </div>
       
    );
}
export default Cart;