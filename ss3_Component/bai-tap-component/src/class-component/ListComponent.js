import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import students from '../service/students';

class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: []
        }
    }

    componentDidMount(){
        const data = students.getAll();
        this.setState({studentList: data});
    }

    render() {
        return (
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.studentList.map((s, i) => (
                        <tr key={s.id}>
                            <th scope="row">{i + 1}</th>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default ListComponent;