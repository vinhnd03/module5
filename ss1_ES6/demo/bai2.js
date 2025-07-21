import {students} from "./students.js";

let highScore = students.filter(student => student.scores.reduce((sum, value) => sum + value, 0) / student.scores.length >= 8);

console.log(highScore);