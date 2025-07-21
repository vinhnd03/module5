import {students} from "./students.js";

let argScore = students.map(student => student.name + ": " 
    + student.scores.reduce((sum, value) => sum + value, 0) / student.scores.length);

console.log(argScore);