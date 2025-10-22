import { useState } from "react";

const User = () => {

    const [count_1,setCount] = useState(1);
    const [count_2,setCount_2] = useState(2);

    return (

        <div className = "User-js">

            <h3> Name: </h3>
            <h3> Email: </h3>
            <h2> count_1: {count_1} </h2> 
            <h2> count_2: {count_2} </h2>

        </div>
    );

};

export default User;