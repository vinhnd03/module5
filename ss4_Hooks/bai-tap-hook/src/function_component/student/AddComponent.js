import React, { useRef } from "react";
import { add, getAll } from "../service/students";

const AddComponent = ({ setIsUpdate }) => {

    const emailRef = useRef("");
    const nameRef = useRef("")

    const handleAdd = () => {
        let student = {
            name: nameRef.current.value,
            email: emailRef.current.value
        }

        add(student);
        console.log(getAll());
        setIsUpdate(prev => !prev)

        nameRef.current.value = "";
        emailRef.current.value = "";
    }

    return (
        <div>
            <input className="form-control w-25" ref={nameRef} placeholder="Nhập tên..." />
            <input className="form-control w-25" ref={emailRef} placeholder="Nhập email..."  />
            <button className="btn btn-success w-25" onClick={handleAdd}>Save</button>
        </div>
    )
}

export default AddComponent;