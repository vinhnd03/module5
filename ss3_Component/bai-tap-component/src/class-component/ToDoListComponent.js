import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

class ToDoListComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            list : [],
            item: ''
        }
    }

    handleChange = (event) => {
        const item = event.target.value;
        this.setState({
            ...this.state,
            item : item
        })
        
    }

    handleAddItem = () => {
        if(this.state.item.trim() === '') return;
        this.setState({
            list : [...this.state.list, this.state.item],
            item : ''
        })
    }

    render(){
        return (
            <div className="d-flex justify-content-center m-5">
                <div>
                    <h1 className="text-center">Todo List</h1>
                    <input onChange={this.handleChange} name="input" id="input" type="text" value={this.state.item}></input>
                    <button onClick={this.handleAddItem}>Add</button>
                    <div>
                    <h2 className="mt-5">List:</h2>
                    <ul>
                        {this.state.list.map((item, index) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
                </div>
                
            </div>
        );
    }
}

export default ToDoListComponent;