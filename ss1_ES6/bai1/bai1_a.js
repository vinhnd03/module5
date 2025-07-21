import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question("Nhập tên của bạn: ", (name) => {
//   console.log(`Chào bạn, ${name}!`);
//   rl.close(); // kết thúc chương trình
// });


rl.question("Nhập một số: ", num => {
    let count = 0;
    for(let i = 1; i < num; i++){
        if(num % i === 0){
            count++;
        }
    }
    if(count === 1){
        console.log(num + " Là số nguyên tố");
    }else{
        console.log(num + " Không phải là số nguyên tố");
    }
    rl.close();
});