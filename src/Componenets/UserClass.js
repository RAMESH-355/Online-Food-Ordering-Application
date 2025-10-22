import React from "react"; 

class UserClass extends React.Component{

    constructor(props){
        super(props);

        console.log( this.props.name + "child constructer");


        this.state = {
            count_1: 1,
            count_2: 2,
            count_3: 3,


        };
    };

    componentDidMount() {
        console.log( this.props.name + "child component mount");
    }
    render(){

        console.log( this.props.name + "child render");
        const {name,location, email} = this.props;

        const {count_1, count_2, count_3} = this.state;

        return(
            <div className = "User-js">

                <h3> Name: {name}</h3>
                <h3> Location: {location} </h3>
                <h3> Email: {email}</h3>

                <h2> count_1 : {count_1} </h2>
                <h2> count_2 : {count_2} </h2>
                <h2> count_3 : {count_3} </h2>

                <button onClick = {
                    () => {
                        this.setState({
                            count_1: this.state.count_1 + 1,
                            count_2: this.state.count_2 + 1,
                            count_3: count_3 + 1,
                        })
                    }
                }> Count Increase </button>
            </div>
        )
    }
}

export default UserClass;