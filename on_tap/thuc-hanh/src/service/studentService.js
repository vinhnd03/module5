import axios from 'axios';

const findAll = async () => {
    try {
        const resp = await axios.get("http://localhost:3001/students");
        return resp.data;
    } catch (error) {
        console.log(error);
        return []
    }
}

const findById = async (id) => {
    try {
        const resp = await axios.get("http://localhost:3001/students/" + id);
        return resp.data;
    } catch (error) {
        console.log(error);
        return {}
    }
}

const add = async (student) => {
    try {
        await axios.post("http://localhost:3001/students", student);
    } catch (error) {
        console.log(error);
    }
}

const update = async (student) => {
    try {
        await axios.put("http://localhost:3001/students/" + student.id, student);
    } catch (error) {
        console.log(error);
    }
}

const deleteById = async (id) => {
    try {
        await axios.delete("http://localhost:3001/students" + id);
    } catch (error) {
        console.log(error);
    }
}

const findByName = async (searchName) => {
    try {
        const resp = await axios.get("http://localhost:3001/students?name_like=" + searchName);
        return resp.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export default {add, deleteById, findAll, findById, findByName, update};