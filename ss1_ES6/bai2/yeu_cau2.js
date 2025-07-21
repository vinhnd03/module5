import {courses} from "./courses.js";

let coursesArray = courses.filter(course => course.rating < 4).map(course => course.id + " - " + course.title + " - " + course.rating);

console.log(coursesArray);