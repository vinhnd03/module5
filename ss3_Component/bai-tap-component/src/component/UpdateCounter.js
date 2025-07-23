import React, {Component} from "react";

class UpdateCounter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        };
    }

    increment = () => {
        this.setState({ count : this.state.count + 1});
    };

    decrement = () => {
        if(this.state.count > 0){
             this.setState({ count : this.state.count - 1 });
        }
       
    };

    reset = () => {
        this.setState({ count : 0});
    };

    render(){
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.decrement}>Giảm</button>
                <button onClick={this.reset}>Làm mới</button>
                <button onClick={this.increment}>Tăng</button>
            </div>
        )
    }
}

export default UpdateCounter;