import {courses} from "./courses.js";

let highRatingCourses = courses.filter(course => course.rating >= 4);

console.log(highRatingCourses);