// Reuse 
// function greet(name){
//     console.log(`Helo:${name}`);    
// }

// greet('AaMna')

// 2nd Call back 

function handleUser(callback){
    const name = 'AaMna'
    callback(name)
}

function getName(name){
    console.log(`Hello ${name}`)

}
handleUser(getName)

// Today I  want to learned about Aync function, promise and call back  