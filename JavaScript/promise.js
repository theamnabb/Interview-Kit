// //  Promise 

// let userGet = "AaMna";

// let getFood = new Promise((resolve, reject) => {
//     let isFoodReady = true;

//     setTimeout(() => {
//         if (isFoodReady) {
//             resolve(`Food is ready, ${userGet}`);
//         } else {
//             reject("Food is not ready");
//         }
//     }, 1000);
// });

// getFood
//   .then((message) => {
//     console.log("✅", message);
//   })
//   .catch((error) => {
//     console.log("❌", error);
//   });

// //    Cleaner Code | Async Await

// async function getFoodAsync(){
//     let userGet = 'AaMna'

//     let isFoodReady = true;

// let food = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isFoodReady) {
//             resolve(`Food is ready, ${userGet}`);
//         } else {
//             reject("Food is not ready");
//         }
//     }, 1000);
// }

// )}

 async function sayHi() {
  return "Hi from AaMna!";
}
// sayHi()
// .then (message=>console.log(message));

async function caller() {
    const msg = await sayHi();
    console.log(msg); // ✅ Hi from AaMna!
  }
  
  caller();
  
