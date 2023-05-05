import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blogs from "../pages/Blogs/Blogs";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import FourOFour from "../pages/FourOFour/FourOFour";
import LoginLayout from "../layouts/LoginLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <FourOFour></FourOFour>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },

            {
                path: '/chefs/:id',
                element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
                loader: ({ params }) => fetch(`https://best-recipes-server-faridul22.vercel.app/chefs/${params.id}`)
            },
        ]
    },
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
        ]

    },
    {
        path: '*',
        element: <FourOFour></FourOFour>
    }
])

export default router;