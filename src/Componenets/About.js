import User from "./User";
import UserClass from "./UserClass";
import React from "react";


/*
class About extends React.Component {

    constructor(props){
        super(props);
        console.log("parent constructor");

    };

    componentDidMount(){
        console.log("parent class component");
    }

    render(){
            console.log("parent render");

        return (

            <div className = "About-page">
                <h1>About US</h1> 
                <h2> It is an React project about Swiggy Application </h2>
                <UserClass name = {"First"} />
                <UserClass name = {"Second"} />
                <UserClass name = {"Third"} />

            </div>
    );
};
};

export default About;

*/
const About = () => {
    return (
        <div className = "About-page">
            <h1 className = "text-center font-bold text-2xl text-red-600 underline">About US</h1> 
            <h2 className = "text-center font-bold text-2xl text-blue-600 underline py-3"> Discover the Joy of Ordering Food Online </h2>
            <p className = "text-center py-2"> Our app connects you with a wide range of restaurants, making it easier than ever to enjoy your favorite meals at home or on the go. From local favorites to gourmet cuisine, we bring every menu to your fingertips.</p>
            <h2 className = "text-center font-bold text-2xl text-blue-600 underline py-3"> Our Mission </h2>
            <p className = "text-center py-2"> To simplify food ordering by providing a fast, reliable, and enjoyable experience for every customer while supporting restaurants in reaching more diners. </p>

            <h2 className = "text-center font-bold text-2xl text-blue-600 underline py-3"> What we offer </h2>
            <div className = "text-center ">
                <p className = "text-orange-500 underline"> Restaurant Variety: </p> <p> Explore menus from thousands of restaurants, cafes, and eateries near you. </p>
                <p className = "text-orange-500 underline"> Easy Ordering:  </p> <p>  Place orders in just a few clicks with secure and convenient payment options. </p>
                <p className = "text-orange-500 underline"> Live Order Tracking: </p> <p>  Follow your order in real time from preparation to delivery. </p>
                <p className = "text-orange-500 underline"> Exclusive Offers: </p> <p>  Get access to special discounts, combo deals, and loyalty rewards.</p>
            </div>

            <h2 className = "text-center font-bold text-2xl text-blue-600 underline py-3">Why Choose Us</h2>
            <p className = "text-center py-2">We focus on convenience, quality, and reliability. Our platform ensures every meal is delivered fresh, on time, and with care, making food ordering effortless and enjoyable.</p>
            
        </div>
    );
};
export default About;

/*
<UserClass name = {"Ramesh"} location = {"India"} email = {"Ramesh123"}/>
*/

