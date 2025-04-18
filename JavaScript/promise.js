//  Promise 

let userGet = "AaMna";

let getFood = new Promise((resolve, reject) => {
    let isFoodReady = true;

    setTimeout(() => {
        if (isFoodReady) {
            resolve(`Food is ready, ${userGet}`);
        } else {
            reject("Food is not ready");
        }
    }, 1000);
});

getFood
  .then((message) => {
    console.log("✅", message);
  })
  .catch((error) => {
    console.log("❌", error);
  });