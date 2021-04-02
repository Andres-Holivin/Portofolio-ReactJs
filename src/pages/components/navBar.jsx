import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const NavBar=({navbar})=> {
    return(      
        <div className="flex justify-center rounded-lg md:justify-start hover:bg-blue-200">
            <a id={navbar.key} className="flex px-4 py-3 text-xl font-normal text-gray-900 justify-items-stretch hover:text-gray-900 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href={navbar.Path}>
                <div className="mx-5"><FontAwesomeIcon size="1x" icon={[navbar.Icon[0],navbar.Icon[1]]} /></div>
                {navbar.Title}
            </a>         
        </div>  
    );
}
export default NavBar;