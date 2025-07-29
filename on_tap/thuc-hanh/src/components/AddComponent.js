import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useEffect, useState } from 'react';
import * as Yup from 'yup'
import classService from '../service/classService';
import subjectService from '../service/subjectService';
import studentService from '../service/studentService';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const AddComponent = () => {
    const [student, setStudent] = useState({ id: 0, name: '', age: 0, gender: true, classCG: 0, address: '', dateOfBirth: '', subjects: [] });
    const [classList, setClassList] = useState([]);
    const [subjectList, setSubjectList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setClassList(await classService.findAll());
            setSubjectList(await subjectService.findAll());
        }

        fetchData();
    }, [])

    const handleSubmit = async (value) => {
        value.classCG = await classService.findById(value.classCG);

        await studentService.add(value);
        toast.success("Thêm mới thành công");
        navigate("/list");
    }

    const handleValidate = Yup.object({
        name: Yup.string().required("Tên không được bỏ trống!"),
        age: Yup.number().min(18, "Tuổi phải lớn hơn 18"),
        dateOfBirth: Yup.date().required("Ngày sinh không được để trống").max(new Date(), "Ngày sinh không được lớn hơn hiện tại"),
        classCG: Yup.number().min(1, "Vui lòng chọn lớp học"),
        subjects: Yup.array().min(1, "Phải chọn ít nhất một môn học"),
        address: Yup.string().required("Địa chỉ không được để trống")
    });

    return (
        <Formik initialValues={student} onSubmit={handleSubmit} validationSchema={handleValidate}>
            <Form className="container w-25" >
                <h2>Thêm mới sinh viên</h2>
                <label >Tên sinh viên:</label>
                <Field type="text" className="form-control mb-3" name="name" />
                <ErrorMessage name="name" component={'div'} style={{ color: 'red' }} />

                <label>Tuổi</label>
                <Field type="number" className="form-control mb-3" name="age" />
                <ErrorMessage name='age' component={'div'} style={{ color: 'red' }} />

                <label>Ngày sinh</label>
                <Field type="date" name="dateOfBirth" className="form-control mb-3" />
                <ErrorMessage name='dateOfBirth' component={'div'} style={{ color: 'red' }} />

                <label>Giới tính:</label> &emsp;
                <Field type="radio" name="gender" value={true} className="form-check-input" /> Nam &emsp;
                <Field type="radio" name="gender" value={false} className="form-check-input mb-3" /> Nữ
                <ErrorMessage name='gender' component={'div'} style={{ color: 'red' }} />
                <br />

                <label>Lớp:</label>
                <Field as="select" name="classCG" className="form-select mb-3">
                    <option value="0">Chọn lớp</option>
                    {classList.map(cls => 
                        <option value={cls.id} key={cls.id}>{cls.name}</option>
                    )}
                </Field>
                <ErrorMessage name='classCG' component={'div'} style={{ color: 'red' }} />

                <label>Môn học:</label>
                <div className='d-flex flex-wrap mb-3'>
                    {subjectList.map(subject => 
                        <div key={subject.id}>
                            <Field className='form-check-input' type="checkbox" value={subject.name} name="subjects" /> {subject.name} &emsp;
                        </div> 
                    )}
                </div>
                <ErrorMessage name='subjects' component={'div'} style={{ color: 'red' }} />

                <label>Địa chỉ:</label>
                <Field className="form-control mb-3" name="address" />
                <ErrorMessage name='address' component={'div'} style={{ color: 'red' }} />
                
                <button className="btn btn-success w-100">Lưu</button>
            </Form>
        </Formik>
    )
}

export default AddComponent;