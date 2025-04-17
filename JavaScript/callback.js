// Reuse
// function greet(name){
//     console.log(`Helo:${name}`);
// }

// greet('AaMna')

// 2nd Call back

function handleUser(callback) {
  const name = "AaMna";
  callback(name);
}

function getName(name) {
  console.log(`Hello ${name}`);
}
handleUser(getName);

// Perform High Order Function

let arr = [1, 2, 3, 4, 5, 6];
console.log(`Length of array: ${arr.length}`);


let doulbleArry = arr.map((num) => num * 2);
console.log(doulbleArry);
console.log(arr);

// Reduce 

let sum = arr.reduce((acc, curr)=>{
    return acc + curr;
});

console.log(sum);

// find

let oddNum  = arr. find(num => num%2 !==0);
console.log(`Odd Number: ${oddNum}`);

// 
