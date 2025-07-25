import { Form, ErrorMessage, Field, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from 'yup'
import { findById, update } from "../service/students";

const UpdateComponent = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const navigate = useNavigate();

    const handleUpdate = (value) => {
        update(value);
        navigate("/list");
    }

    useEffect(() => {
        setStudent(findById(id));
    }, []);

    const handleValidate = Yup.object({
        name: Yup.string().required("Tên không được bỏ trống"),
        email: Yup.string().required("Email không được bỏ trống").matches(/^\w+@\w+(\.\w+)+$/, "Email không đúng định dạng"),
    })



    return (
        student && <Formik initialValues={student} onSubmit={handleUpdate}
            validationSchema={handleValidate}
        >
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

export default UpdateComponent;