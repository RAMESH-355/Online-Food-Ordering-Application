import RestaurentCard, {withPromotedLabel, withPromotedLabel_closed} from "./RestaurentCard";
import resList from "../Utilities/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../Utilities/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {

    const [listOfRestaurents,setListOfRestaurents] = useState([]); 

    const [filteredRestaurent,setFilteredRestaurent] = useState([]);

    const[searchText,setSearchText] = useState("");

    const RestaurentCardPromoted = withPromotedLabel(RestaurentCard);

    const RestaurentCardPromotedClosed = withPromotedLabel_closed(RestaurentCard);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5208473&lng=80.6315661&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json(); 


        setListOfRestaurents(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        //setListOfRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //setFilteredRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    };

    const onlineStatus = useOnlineStatus();
    
    if (onlineStatus === false ) return(
        <h1> Internet connection is lost ! Please verify your internet connection ...</h1>
    )

    return listOfRestaurents.length === 0 ? ( <Shimmer />) : (
        <div className = "">
            <div className = "flex p-10 items-center justify-center ">
                <div className = "">
                    <input type = "text" className = "bg-slate-300" value = {searchText} onChange = {
                        (e) => {
                            setSearchText(e.target.value);
                        }
                    }/> 
                    <button className = "m-1 bg-green-500 rounded-sl w-16 " onClick = {() => {

                        const filteredRestaurent = listOfRestaurents.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredRestaurent(filteredRestaurent);

                    }}
                    >Search</button>
                </div>
                <button className = "bg-orange-500 w-60 h-[27] mx-10 mt-1 rounded-md"
                onClick = {() => {
                    const filteredList = listOfRestaurents.filter(
                        (res) => res.info.avgRating > 4.3
                    );
                setFilteredRestaurent(filteredList);
                }}
                >Top Rated Restraurents</button>
            </div>
            
            <div className = "flex flex-wrap items-center justify-center h-screen">
                {filteredRestaurent.map((restaurent) => (
                    <Link 
                        key = {restaurent.info.id} 
                        to = {"/restaurent/" + restaurent.info.id}
                    >
                        {restaurent.info.isOpen ? (<RestaurentCardPromoted resData = {restaurent}  /> ):(
                            < RestaurentCardPromotedClosed className = "p-5" resData = {restaurent} />
                        )
                        }
                    
                    </Link>
                    ))}
            </div>
        </div>
    );
}; 

export default Body;