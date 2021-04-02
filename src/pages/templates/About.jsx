import Me from '../../assets/images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Home =()=>{
    const Instagram = {
        href:"https://www.instagram.com/holivin_21/",
        target:"_blank "
    };
    const GitHub={
        href:"https://github.com/holivin21",
        target:"_blank "
    }
    const LinkIn={
        href:"https://www.linkedin.com/in/andres-holivin-73327b1a3/",
        target:"_blank"
    }
    const Email={
        href:"mailto:andres12holivin@gmail.com",
        target:"_blank"
    }
    const Facebook={
        href:"https://www.facebook.com/andres.hero.7",
        target:"_blank"
    }
    return(
        <>
            <div className="grid min-h-screen grid-cols-6 grid-rows-6 bg-cover bg-about-background">
                <div className="col-span-6">
                    <div className="grid h-full grid-cols-6 grid-rows-6">
                    </div>
                </div>            
                <div className="flex items-center justify-center w-full col-span-6 col-start-1 row-span-4 row-start-2">
                    <div className="flex flex-col md:p-8 md:flex-row rounded-3xl">
                        <div className="flex justify-center flex-grow-0 px-14 md:pl-0 md:justify-start ">
                            <img src={Me} className="w-64 rounded-md" alt="profile"/>
                        </div>
                        <div className="flex flex-col items-center justify-center flex-grow mt-10 text-justify md:mt-0 md:items-start md:justify-center">
                            <div>Hello, I'm</div>
                            <div className="font-sans text-3xl md:text-4xl">ANDRES HOLIVIN</div>
                            <div className="block w-64 text-xl text-center md:text-justify md:w-80">I'm a collect student in Bina Nusantara University. I majored in Computer Science.</div>
                            {/* <div className="block text-xl text-center md:text-justify whitespace-nowrap ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates suscipit nobis quis? Nulla placeat aliquid fugiat. Ducimus esse odit facilis et, quae ea, magnam nam aut est totam fugit debitis?</div> */}
                            
                            <div className="flex my-8 space-x-3 ">
                                <a {...Instagram} className="transition transform cursor-pointer focus:outline-none hover:scale-125"><FontAwesomeIcon size="2x" icon={['fab', 'instagram']} /></a>
                                <a {...GitHub} className="transition transform cursor-pointer focus:outline-none hover:scale-125"><FontAwesomeIcon size="2x" icon={['fab', 'github']} /></a>
                                <a {...LinkIn} className="transition transform cursor-pointer focus:outline-none hover:scale-125"><FontAwesomeIcon size="2x" icon={['fab', 'linkedin']} /></a>
                                <a {...Email} className="transition transform cursor-pointer focus:outline-none hover:scale-125"><FontAwesomeIcon size="2x" icon={['far', 'envelope']} /></a>
                                <a {...Facebook} className="transition transform cursor-pointer focus:outline-none hover:scale-125"><FontAwesomeIcon size="2x" icon={['fab', 'facebook-square']} /></a>
                            </div>                        
                        </div>                    
                    </div>
                </div>
                <div className="col-span-6 row-start-6">
                    <div className="grid h-full grid-cols-6 grid-rows-6 row-start-4">
                    </div>
                </div>                
            </div>      
        </>
    );
}
export default Home;