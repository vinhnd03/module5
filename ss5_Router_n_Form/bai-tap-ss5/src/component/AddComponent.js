import { useNavigate } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useState } from "react";
import {toast} from 'react-toastify'
import * as Yup from 'yup';
import { add } from "../service/students";

const AddComponent = () => {
    const navigate = useNavigate();
    const [student, setStudent] = useState({ name: '', email: '' });

    const handleAdd = (value) => {
        console.log(value)
        add(value);
        navigate("/list");
        toast.success("Thêm mới thành công");
    }

    const handleValidate = Yup.object({
        name: Yup.string().required("Tên không được bỏ trống"),
        email: Yup.string().required("Email không được bỏ trống").matches(/^\w+@\w+(\.\w+)+$/, "Email không đúng định dạng"),
    })

    return (
        <Formik initialValues={student} onSubmit={handleAdd} validationSchema={handleValidate}>
            <Form>
                <label>Nhập tên</label>
                <Field type="text" className="form-control w-25" name="name" /><br />
                <ErrorMessage name="name" component={'div'} style={{ color: 'red' }} />
                <label>Nhập email</label>
                <Field type="text" className="form-control w-25" name="email" /><br />
                <ErrorMessage name="email" component={'div'} style={{ color: 'red' }} />

                <button className="btn btn-success w-25" type="submit">Save</button>
            </Form>
        </Formik>
    )
}

export default AddComponent;