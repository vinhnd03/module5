
let array = [10, 15, 20, 30, 35]

let sumArr = array.filter(num => num %2 === 0).reduce((sum, value) => sum + value, 0);

console.log(sumArr);