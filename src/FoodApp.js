import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js"; 
import Contact from "./Components/Contact.js";
import Error from "./Components/Error.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestraurentMenu from "./Components/RestaurentMenu.js";
import { Provider } from "react-redux";
import appStore from "./Utilities/appStore.js";
import About from "./Components/About.js";
import Cart from "./Components/Cart.js"; 


const Grocery = lazy(() => import("./Components/Grocery.js"));

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