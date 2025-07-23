import { Component } from "react";
import '../css/style.css';

let students = [
    { name: 'Vĩnh1', phone: '0987654321', email: 'vinh@gmail.com' },
    { name: 'Vĩnh2', phone: '0987654321', email: 'vinh2@gmail.com' },
    { name: 'Vĩnh3', phone: '0987654321', email: 'vinh3@gmail.com' }
]

class StudentTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            studentList: [],
            form: { name: '', phone: '', email: '' },
            isValid: false,
            indexSelected: -1
        }
    }

    componentDidMount(){
        this.setState(prevState => ({
            ...prevState,
            studentList : [...students]
        }))
    }

    handleChange = (event) => {
        this.setState((state) => {
            const form = state.form
            form[event.target.name] = event.target.value
            return { form }
        }, () => this.checkInvalidForm())
    }

    handleSelect = (studentSelected, index) => {
        this.setState({
            form: JSON.parse(JSON.stringify(studentSelected)),
            indexSelected: index
        })
        console.log(index);
    }

    checkInvalidForm = () => {
        const { name, phone, email } = this.state.form
        const value = name.trim() && phone.trim() && email.trim()
        this.setState({
            isValid: value
        })
    }

    handleSubmit = () => {
        if (this.state.isValid) {
            const newList = [...this.state.studentList];
            if (this.state.indexSelected > -1) {
                newList[this.state.indexSelected] = this.state.form;
            } else {
                newList.push(this.state.form);
            }
            this.setState(prevState => ({
                ...prevState,
                studentList: [...newList],
                form: { name: '', phone: '', email: '' },
                indexSelected: -1
            }))
        }
    }

    handleDelete = (index) => {
        const newList = [...this.state.studentList];
        newList.splice(index,1);
        this.setState(prevState => ({
            ...prevState,
            studentList: newList,
            form: { name: '', phone: '', email: '' }
        }))
    }

    render() {
        const { studentList, form } = this.state
        return (
            <div>
                <div>
                    <h1>Student List</h1>
                    <div>
                        <label>Name: </label>
                        <input name="name" value={this.state.form.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Phone: </label>
                        <input name="phone" value={this.state.form.phone} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input name="email" value={this.state.form.email} onChange={this.handleChange} />
                    </div>
                    <button onClick={this.handleSubmit}>Submit</button>
                    <table>
                        <thead>
                            <tr>
                                {/* Tạo Table header Name, Phone, Email, Action */}
                                <th>STT</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Sử dụng phương thức map() để in danh sách student
                    Tạo button Edit với onClick gọi tới hàm handleSelect
                    Tạo button Delete với onClick gọi tới hàm handleDelete */}
                            {studentList.map((std, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{std.name}</td>
                                    <td>{std.phone}</td>
                                    <td>{std.email}</td>
                                    <td>
                                        <button onClick={() => this.handleSelect(std, index)}>Edit</button>
                                        <button onClick={() => this.handleDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default StudentTable;