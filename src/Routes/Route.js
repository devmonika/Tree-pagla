import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import MyReview from "../Pages/MyReview/MyReview";
import NotFound from "../Pages/NotFound/NotFound";
import Services from "../Pages/Services/Services";
// import SingleServicePage from '../Shared/SingleServicePage/SingleServicePage';
import SingleServicePage from './../Shared/SingleServicePage/SingleServicePage';

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/',
                element:<About></About>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
				path: '/services',
				element: <Services></Services>
			},
            {
				path: '/service/:id',
				element: <SingleServicePage></SingleServicePage>,
                loader: ({params}) => fetch(`https://tree-pagla-server.vercel.app/services/${params.id}`)
			},
            {
				path: '/addservices',
				element: <AddService></AddService>
			},
            {
				path: '/myreview',
				element: <MyReview></MyReview>
			},
            {
				path: '*',
				element: <NotFound></NotFound>
			},
        ]
    }
]);

export default routes;