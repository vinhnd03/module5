let students = [
    {id: 1, name : "Vĩnh", email: "vinh@gmail.com"},
    {id: 2, name : "Khánh", email: "khanh@gmail.com"},
    {id: 3, name : "Duy", email: "duy@gmail.com"},
    {id: 4, name : "Chiến", email: "chien@gmail.com"}
]

const getAll = () => students;

const add = (student) => {
    const id = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
    student = {
        ...student,
        id
    }
    students.push(student)
};

const deleteById = (id) => {
    students = students.filter(s => s.id !== id);
    // console.log(students)
}

const update = (student) => {
    // students = students.map(s => {
    //     if(s.id == student.id){
    //         return student;
    //     }
    //     return s;
    // });

    // students = students.map(s => (s.id == student.id ? student : s));

    students = students.map(s => (s.id == student.id ? student : s));
}

const findById = (id) => (students.find(s => s.id == id));

export {getAll, add, deleteById, findById, update};