import ItemList from "./ItemList";
import { useState } from "react";

const RestaurentCategory = ({data, showItems, setShowIndex}) => {

    const handleClick = () => {
        setShowIndex(); 
    };

    return(
        <div>
            <div className = "text-center w-6/12 p-4 mx-auto my-5 bg-orange-600 rounded-lg font-bold text-orange">  {/* Header */}
            <div className = "flex justify-between cursor-pointer " onClick={handleClick}>
                <span className = "text-black font-bold cursor-pointer"> {data?.title} ({data?.itemCards?.length})</span> 
                <span> {"🔽"} </span>

        </div>

        {showItems && <ItemList items = {data.itemCards} /> }
        </div>
        </div>
    )
}

export default RestaurentCategory;