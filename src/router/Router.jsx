import {
    createBrowserRouter,
   
} from "react-router-dom";
import Layout from "../component/Routerlayout/Layout";
import Home from "../component/Home/Home";
import Allcontent from "../component/PageContent/Allcontent";
import Adcoffe from "../component/PageContent/Adcoffe";
import Contentdettails from "../component/PageContent/Contentdettails";


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
                        loader: () => fetch('http://localhost:3000/coffe'),
                        element :<Allcontent/>
                    },
                    {
                        path:'/add',
                        element :<Adcoffe/>
                    },
                    {
                        path:'/details/:id',
                        loader: ({params}) => fetch(`http://localhost:3000/coffe/${params.id}`),
                        element :<Contentdettails/>
                    },
                ]
            },
            
        ]
    },
]);