import {
    createBrowserRouter,
   
} from "react-router-dom";
import Layout from "../component/Routerlayout/Layout";
import Home from "../component/Home/Home";
import Allcontent from "../component/PageContent/Allcontent";
import Adcoffe from "../component/PageContent/Adcoffe";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children :[
            {
               
                element:<Home/>,
                children :[
                    {
                        index : true,
                        element :<Allcontent/>
                    },
                    {
                        path:'/add',
                        element :<Adcoffe/>
                    },
                ]
            },
            
        ]
    },
]);