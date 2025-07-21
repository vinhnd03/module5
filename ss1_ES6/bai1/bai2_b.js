
const student1 = {firstName : "Vĩnh", gender : "Male", language: "Vietnamese" }
const student2 = {degree: "master", gender : "Male", language: "Vietnamese" }

const getInfo = (object) => {
    const {firstName = "Quân", degree = "NA"} = object;
    return {firstName, degree};
};

console.log(getInfo(student1));
console.log(getInfo(student2));