import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../Utilities/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => {store.cart.items});

    const dispatch = useDispatch();

    const handleClearItems = () => {
        dispatch(clearCart);
    }

    return(
        <div className = "text-center m-10 p-10"> 
            <h1 className = "text-xl font-bold"> Cart Items </h1> 
            <div className = "w-6/12 m-auto">
                <button className = "p-2 m-2 text-white bg-black rounded-lg">
                    Clear Cart
                </button>
                <ItemList items = {cartItems} />
                {cartItems.length === 0 && <h1> Cart is empty. Plaes add some in cart ! </h1>}
            </div>
        </div>
    );
};

export default Cart;