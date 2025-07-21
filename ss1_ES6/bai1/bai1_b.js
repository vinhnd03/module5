let array = [1, 2, 3, 4, 5, 6, 7];

let primeArr = array.filter(num => {
    let count = 0;
    for(let i = 1; i < num; i++){
        if(num % i === 0){
            count++;
        }
    }
    if(count === 1){
        return true;
    }
})

console.log(primeArr);