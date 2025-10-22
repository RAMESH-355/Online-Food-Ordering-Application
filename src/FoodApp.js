import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Componenets/Header.js";
import Body from "./Componenets/Body.js"; 
import About from "./Componenets/About.js";
import Contact from "./Componenets/Contact.js";
import Error from "./Componenets/Error.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestraurentMenu from "./Componenets/RestaurentMenu.js";
import { Provider } from "react-redux";
import appStore from "./Utilities/appStore.js";
import Cart from "./Componenets/cart.js";


const Grocery = lazy(() => import("./Componenets/Grocery.js"));

const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <div className = "App">
                <Header />
                <Outlet />
            </div>
        </Provider>
    );
}; 

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
        {
            path: "/",
            element: <Body/>,
        },
        {
            path: "/home",
            element: <Body />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path : "/restaurent/:resId", 
            element: <RestraurentMenu />,
        },
        {
            path: "/grocery",
            element: <Suspense fallback = {<h1> Loading ... </h1>} > <Grocery /> </Suspense>
        },
        {
            path: "/cart",
            element: <Cart />
        },
        ],
        errorElement: <Error />,
    },
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router = {appRouter} />);