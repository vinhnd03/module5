import {students} from "./students.js";

// const [ { name, scores } ] = students;

// console.log(name + ": " + scores);

students.forEach(({name, scores}) => {
    console.log(name + ": " + scores);
})
