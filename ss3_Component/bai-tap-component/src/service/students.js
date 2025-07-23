let students = [
    {
        id: 1,
        name: "Vĩnh",
        age: 22
    },
    {
        id: 2,
        name: "Duy",
        age: 28
    },
    {
        id: 3,
        name: "Khánh",
        age: 25
    },
    {
        id: 4,
        name: "Chiến",
        age: 23
    },
];

const getAll = () => students;

const add = student => students.push(student);

export default {getAll, add};

