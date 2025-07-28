import axios from "axios"

const getAll = async () => {
    try {
        const reps = await axios.get("http://localhost:3001/classes")
        return reps.data;
    } catch (error) {
        console.log(error);
        return [];
    }
} 

const findById = async (id) => {
    try {
        const reps = await axios.get("http://localhost:3001/classes/" + id);
        return reps.data;
    } catch (error) {
        console.log(error);
        return {};
    }
}

export {getAll, findById};