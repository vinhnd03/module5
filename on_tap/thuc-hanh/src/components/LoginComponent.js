import { useDispatch } from "react-redux"
import { loginAction1 } from "../redux/action/action";
import { toast } from "react-toastify";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (value) => {
        // console.log("username: " + value.username);
        // console.log("password: " + value.password);
        
        dispatch(loginAction1(value)).then(status => {
            if (status) {
                toast("Đăng nhập thành công");
                navigate('/');
            } else {
                toast("Đăng nhập thất bại");
            }
        });
    }


    return (
        <Formik initialValues={{ username: "", password: "" }} onSubmit={handleLogin}
            className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card shadow p-4 rounded-4" style={{ width: "100%", maxWidth: "400px" }}>
                <h3 className="text-center mb-4">Đăng nhập</h3>
                <Form>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Tên đăng nhập</label>
                        <Field type="text" className="form-control" id="username" name="username" placeholder="Nhập tên đăng nhập" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Mật khẩu</label>
                        <Field type="password" className="form-control" id="password" name="password" placeholder="Nhập mật khẩu" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Đăng nhập</button>
                </Form>
            </div>
        </Formik>
    );
};

export default LoginComponent;
