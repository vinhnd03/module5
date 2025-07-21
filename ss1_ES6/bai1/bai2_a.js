import { person } from "./person.js";

const {firstName, gender, education: {degree}, languages} = person;

// console.log(firstName);
// console.log(gender);
// console.log(degree);
// console.log(languages[0]);

const student = {firstName, gender, degree, language: languages[0] }

console.log(student);
