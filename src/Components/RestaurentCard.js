import CDN_URL from "../Utilities/constant";

const RestaurentCard = (props) => {
    const {resData} = props;

    return (
        <div className = "m-4 p-4 w-[300px] text-center cursor-pointer bg-gray-100 hover:bg-gray-300 rounded-lg ">
            <img className = "rounded-lg"
                alt = "RESTAURENT-Logo" 
                src = {CDN_URL + resData.info.cloudinaryImageId} />
            <h3 className = "pt-5 py-4 font-bold text-xl">{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4> {"⭐ " + resData.info.avgRating} stars</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{"🛵 " + resData.info.sla.deliveryTime} minutes</h4>
        </div>  
    );
};

export const withPromotedLabel = () => {
    return (props) => {
        return(
            <div>
                <label className = "absolute bg-black text-white rounded-lg w-[75px] text-center mx-8 mt-3"> OPEN </label>
                <RestaurentCard {...props}/>
            </div>
        );
    };
};


export const withPromotedLabel_closed = () => {
    return (props) => {
        return(
            <div>
                <label> CLOSED </label>
                <RestaurentCard {...props}/>
            </div>
        );
    };
};

export default RestaurentCard;
