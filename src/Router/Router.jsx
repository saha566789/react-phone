import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Fevorites from "../Pages/Home/Favorites/Fevorites";
import LogIn from "../Pages/Login/LogIn";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Phone from "../Components/Phone/Phone";

const myRouter = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                
                loader: () => fetch('/public/phones.json')
            },
            {
               path:'/phones/:id',
               element:<Phone></Phone> ,
               loader: () => fetch('/public/phones.json')
            },
            {
                path:'/fevorites',
                element:<Fevorites></Fevorites>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            }
        ]
    }
]

)

export default myRouter;