
import Shimmer from "./Shimmer";
import useRestaurentMenu from "../Utilities/useRestaurentMenu";
import { useParams } from "react-router-dom";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";

const RestraurentMenu = () => {

    const resInfo = useRestaurentMenu();

    const [showIndex,setShowIndex] = useState(null);

    if (resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwo} = resInfo?.cards[2]?.card?.card?.info;

    //const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    // Step 1: Find the REGULAR section from the cards

    const menuCards = resInfo?.cards.find(

    (c) => c?.groupedCard?.cardGroupMap?.REGULAR
                        )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const categories = menuCards?.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(categories);

    // Step 2: From REGULAR section, find the card that has itemCards

    const itemCardContainer = menuCards?.find(
            (card) => card?.card?.card?.itemCards);

    // Step 3: Extract itemCards safely

    const itemCards = itemCardContainer?.card?.card?.itemCards;

    //const {categories} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    return (
        <div className = "text-center">
            <h1 className = "px-5 pt-3 underline text-red-600 font-extrabold"> Hotel name </h1>

            <h2 className = "px-5 pt-2 font-bold text-blue-900"> {name} </h2>
            <h2 className = "px-5 pt-2"> Cuisines:- { cuisines.join(", ")} - {"Rs. " + costForTwo / 100}  </h2>

            <div className= "text-center">
                    { categories.map((category,index)  => <RestaurentCategory 
                                                    key = {category?.card?.card?.title} 
                                                    data = {category?.card?.card}
                                                    showItems = { index === showIndex ? true : false }
                                                    setShowIndex = {() => setShowIndex(index)}
                                                    /> ) }
                    
            </div>
        </div>
    ); 
};

export default RestraurentMenu;

/* 
<h3 className = "px-5 py-5 font-bold underline" > List of Items </h3>
<ul className = "list-disc px-5 ">
                {itemCards.map((item) => (
                    <li key = {item.card.info.id}> 
                        {item.card.info.name} { "- Rs. "} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                ))}
            </ul>
*/