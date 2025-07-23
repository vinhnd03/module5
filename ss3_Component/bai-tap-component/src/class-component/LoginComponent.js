import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import withRouter from "../router/withRouter";

const admin = {
    username: 'admin@gmail.com',
    password: '123456'
}


class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: {
                username: '',
                password: ''
            }
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            account: {
                ...prevState.account,
                [name]: value
            }
        }));
    }

    handleLogin = () => {
        const { username, password } = this.state.account;
        if (username === admin.username && password === admin.password) {
            this.props.navigate("/home")
            console.log("Đăng nhập thành công");
        } else {
            console.log("Đăng nhập thất bại");
        }
    }

    render() {
        return (
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="card shadow-lg p-4" style={{ width: '100%', maxWidth: '400px' }}>
                    <h3 className="text-center mb-4">Đăng nhập</h3>

                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Địa chỉ Email</label>
                            <input type="email" className="form-control" id="username" name="username"
                                placeholder="Nhập email" onChange={this.handleChange} required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Mật khẩu</label>
                            <input type="password" className="form-control" id="password" name="password"
                                onChange={this.handleChange} placeholder="Nhập mật khẩu" required />
                        </div>

                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="rememberMe" />
                            <label className="form-check-label" for="rememberMe">Ghi nhớ đăng nhập</label>
                        </div>

                        <button type="button" onClick={this.handleLogin} className="btn btn-primary w-100">Đăng nhập</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(LoginComponent);