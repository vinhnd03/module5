import { Button, Modal } from "react-bootstrap";
import { useState } from 'react';
import { deleteById } from "../service/students";

const DeleteComponent = ({ isShowModal, handleCloseModal, deleteStudent }) => {

    const handleDelete = async () => {
        await deleteById(deleteStudent.id);
        handleCloseModal();
    }

    return (
        <Modal show={isShowModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Xác nhận xóa</Modal.Title>
            </Modal.Header>
            <Modal.Body>Bạn có muốn xóa sinh viên {deleteStudent.name} không?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                   Delete
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteComponent;