import {students} from "./students.js";

students.forEach(student => {
    console.log(`${student.name} - Age: ${student.age} - Avg Score: ${student.scores
        .reduce((sum, value) => sum + value, 0) / student.scores.length}`);
})