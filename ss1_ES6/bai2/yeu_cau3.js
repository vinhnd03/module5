import {courses, addedCourses} from "./courses.js";

let mergedCourses = [...courses, ...addedCourses];

console.log(mergedCourses);