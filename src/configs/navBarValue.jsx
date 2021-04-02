import About from '../pages/templates/About';
import MyProject from '../pages/templates/MyProject';
import Config from '../pages/templates/Config';
import TestFirebaseDB from '../pages/templates/TestFirebaseDB';
import ContectMe from '../pages/templates/ContectMe';
const navBarValue=[
    {   
        Path: "/",
        Title: "About",
        id: "1",
        type: "singel",
        Icon:['fas','user'],
        Compenent:()=><About/>
    },
    // {
    //     Path: "/config",
    //     Title: "Config",
    //     id: "2",
    //     type: "single",
    //     Icon:['fas','cog'],
    //     Compenent:()=><Config/>
    // },
    {   
        Path: "/Project",
        Title: "Project",
        Id: "3",
        Type: "single",
        Icon:['fas','tasks'],
        Compenent:()=><MyProject/>
    },
    {   
        Path: "/contectMe",
        Title: "Contect Me",
        Id: "4",
        Type: "single",
        Icon:['fas','comment-alt'],
        Compenent:()=><ContectMe/>
    },
    // {   
    //     Path: "/testDB",
    //     Title: "Test DB",
    //     Id: "4",
    //     Type: "single",
    //     Icon:['fas','database'],
    //     Compenent:()=><TestFirebaseDB/>
    // },
];
export default navBarValue;