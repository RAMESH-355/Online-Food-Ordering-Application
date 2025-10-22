import { Logo_URL } from "../Utilities/constant";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utilities/useOnlineStatus";
import { useSelector } from "react-redux";
import appStore from "../Utilities/appStore";

const Header = () => {

    const [btnNameReact,setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    useEffect (() => {
        console.log();
    },[btnNameReact]);

    const cartItems = useSelector((store) => store.cart.items);

    console.log(cartItems);

    return (
        <div className = "flex justify-between h-35 shadow-lg bg-slate-300">
            <div className = "p-4 m-4">
                <img 
                    className = "h-35 w-40" 
                    src = {Logo_URL}
                />
            </div>
            <div className = "flex items-center align-middle p-30 ">
                <ul className = "flex justify-between m-4 p-10 font-serif text-lg ">
                    <li className = "px-3 cursor-pointer">
                        Online Status: {onlineStatus ? "✅" : "🛑" }
                    </li>
                    <li className = "px-3 cursor-pointer">
                        <Link to = "/">Home</Link>
                    </li>
                    <li className = "px-3 cursor-pointer">
                        <Link to = "/about">About Us</Link>
                    </li>
                    <li className = "px-3 cursor-pointer">
                        <Link to = "/contact">Contact Us</Link>
                    </li>
                    <li className = "px-3 cursor-pointer">
                        <Link to = "/grocery"> Grocery </Link>                    
                    </li>
                    <li className = "px-3 cursor-pointer" >
                        <Link to = "/cart"> Cart 🛒 ({cartItems.length}) </Link>   
                    </li>
                    <button 
                        className = "px-3 cursor-pointer"
                        onClick = {() => {btnNameReact === "Login" 
                            
                            ? setBtnNameReact("Logout")
                            : setBtnNameReact("Login");

                        }} 
                    > 
                    {btnNameReact} </button>    
                </ul>
            </div>
        </div>
    );
};

export default Header;