import { Form, ErrorMessage, Field, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from 'yup'
import { findById, update } from "../service/students";
import { getAll } from "../service/classCG";
import subjectService from "../service/subjects";

const UpdateComponent = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const navigate = useNavigate();
    const [classList, setClassList] = useState([]);
    const [subjectList, setSubjectList] = useState([]);


    const handleUpdate = async (value) => {
        value = {
            ...value,
            classCG : classList.find(cls => cls.id === parseInt(value.classCG))
        }
        await update(value);
        navigate("/list");
    }

    useEffect(() => {
        const fetchData = async () => {
            let std = await findById(id);
            std = {
                ...std,
                classCG: std.classCG.id
            }
            setStudent(std);

            const classes = await getAll();
            setClassList(classes);

            const subjects = await subjectService.getAll();
                        setSubjectList(subjects);
        }
        fetchData();
    }, []);

    const handleValidate = Yup.object({
        name: Yup.string().required("Tên không được bỏ trống"),
        email: Yup.string().required("Email không được bỏ trống").matches(/^\w+@\w+(\.\w+)+$/, "Email không đúng định dạng"),
    })

    // if (!student) return <p>Đang tải dữ liệu...</p>;

    return (
        // student && 
        <Formik initialValues={student} onSubmit={handleUpdate}
            validationSchema={handleValidate}
            enableReinitialize={true}   
        >
            <Form>
                <label>Nhập tên</label>
                <Field type="text" className="form-control w-25" name="name" /><br />
                <ErrorMessage name="name" component={'div'} style={{ color: 'red' }} />
                <label>Nhập email</label>
                <Field type="text" className="form-control w-25" name="email" /><br />
                <ErrorMessage name="email" component={'div'} style={{ color: 'red' }} />
                <label>Giới tính</label><br/>
                <Field type="radio" value="true" name="gender" className="form-check-input"/> Nam &emsp;
                <Field type="radio" value="false" name="gender" className="form-check-input"/> Nữ<br/><br/>
                <label>Môn học</label><br/>
                {subjectList.map(subject => 
                    <span key={subject.id}>
                        <Field type="checkbox" value={subject.name} name="subjects" className="form-check-input"/> {subject.name} &emsp;
                    </span>
                )}
                <br/><br/>
                <label>Chọn lớp</label>
                <Field as="select" className="form-select w-25" name="classCG">
                    {classList.map(cls => (
                        <option value={cls.id} key={cls.id}>{cls.name}</option>
                    ))}
                </Field>

                <button className="btn btn-success w-25" type="submit">Save</button>
            </Form>
        </Formik>
    )
}

export default UpdateComponent;