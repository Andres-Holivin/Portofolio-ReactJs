import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const NavBar=({navbar})=> {
    return(      
        <div>
            <a id={navbar.key} className="flex px-4 py-3 text-xl font-normal text-gray-900 bg-transparent rounded-lg justify-items-stretch hover:text-gray-900 focus:text-gray-900 hover:bg-blue-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href={navbar.Path}>
                <div className="mx-5"><FontAwesomeIcon size="1x" icon={[navbar.Icon[0],navbar.Icon[1]]} /></div>
                {navbar.Title}
            </a>         
        </div>  
    );
}
export default NavBar;