import axios from 'axios'

let students = [
    { id: 1, name: "Vĩnh", email: "vinh@gmail.com" },
    { id: 2, name: "Khánh", email: "khanh@gmail.com" },
    { id: 3, name: "Duy", email: "duy@gmail.com" },
    { id: 4, name: "Chiến", email: "chien@gmail.com" }
]

const getAll = async () => {
    try {
        const resp = await axios.get("http://localhost:3001/students");
        return resp.data;
    } catch (error) {
        console.log(error);
        return [];
    }

};

const add = async (student) => {
    // const id = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
    try {
        await axios.post("http://localhost:3001/students", student);
    } catch (error) {
        console.log(error);
    }
};

const deleteById = async (id) => {
    try {
        await axios.delete("http://localhost:3001/students/" + id);
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

const findById = async (id) => {
    try {
        const resp = await axios.get("http://localhost:3001/students/" + id);
        return resp.data;
    } catch (error) {
        console.log(error);
        return {};
    }
}

const findByName = async (searchName) => {
    try {
        const resp = await axios.get("http://localhost:3001/students?name_like=" + searchName);
        return resp.data
    } catch (error) {
        console.log(error);
        return [];
    }
}

export { getAll, add, deleteById, findById, update, findByName };