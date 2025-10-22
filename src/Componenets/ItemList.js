import CDN_URL from "../Utilities/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../Utilities/cartSlice";

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    return(
        <div>
            {items.map((item) => (
                <div key = {item.card.info.id}
                    className = "p-2 m-2 border-white-600 border-b-2 text-left flex"
                    >
                    <div className = "w-9/12">
                        <div className = "py-2">

                            <span className = "font-bold underline"> {item.card.info.name} </span>

                            <span className = "border-black"> - ₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100} </span>
                        </div> 
                            <p className = "text-xs "> {item.card.info.description} </p>
                        
                        </div>

                        <div className = "w-3/12 p-4"> 

                            <div className = "absolute"> 

                                <button className = "p-1 mx-16 bg-white rounded-lg shadow-lg" onClick = {() => {handleAddItem(item)}} > Add + </button>
                    
                            </div>

                            <img src = {CDN_URL + item.card.info.imageId} className="w-full"/> 
                        </div>

                </div> 

            ) )}
        </div>
    )
}

export default ItemList;