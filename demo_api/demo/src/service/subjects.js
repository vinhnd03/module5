import axios from "axios"

const getAll = async () => {
    try {
        const reps = await axios.get("http://localhost:3001/subjects");
        return reps.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

const findById = async (id) => {
    try {
         const reps = await axios.get("http://localhost:3001/subjects/" + id);
         return reps.data;
    } catch (error) {
        console.log(error);
        return {};
    }
}

export default {getAll, findById};