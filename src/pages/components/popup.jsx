import Modal from 'react-awesome-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const PopUp = (props) =>{
    return(
        <>
            {props.type==="announcement"
                ?<div>
                    <Modal visible={props.visible} width="550px" height="200px" effect="fadeInUp" onClickAway={props.click}>
                        <div style={{gridTemplateRows:"70% 30%"}} className="grid w-full h-full grid-cols-1 grid-rows-2">
                            <p className="flex items-center justify-center mx-8 font-sans text-xl">{props.text}</p>
                            <div className="flex items-center justify-center">
                                <button onClick={props.click} className="px-6 py-3 m-3 font-sans font-semibold text-white bg-red-500 shadow-2xl focus:outline-none rounded-xl">Close</button>
                            </div>
                        </div>
                    </Modal>
                </div>                
                :<div>
                    <Modal visible={props.visible} width="550px" height="200px" effect="fadeInUp" >
                        <div style={{gridTemplateRows:"70% 30%"}} className="grid w-full h-full grid-cols-1 grid-rows-2">
                            <div className="flex items-center justify-center">
                                <FontAwesomeIcon size="4x" icon={['fas', 'spinner']} spin/>
                            </div>                        
                            <div className="flex items-center justify-center">
                                <p>Loding ...</p>
                            </div>
                        </div>
                    </Modal>
                </div>
            }
        </>
    );
}
export default PopUp;