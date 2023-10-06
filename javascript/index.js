// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*   getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error)); */



// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));


// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    obtainInstruction('steak', 1)
      .then( (step1) => {
        document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
        obtainInstruction('steak', 2)
          .then( (step2) => {
            document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
            obtainInstruction('steak', 3)
              .then( (step3) => {
                document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
                obtainInstruction('steak', 4)
                  .then( (step4) => {
                    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
                    obtainInstruction('steak', 5)
                      .then( (step5) => {
                        document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
                        obtainInstruction('steak', 6)
                          .then( (step6) => {
                            document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
                            obtainInstruction('steak', 7)
                              .then( (step7) => {
                                document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
                                document.querySelector("#steakImg").removeAttribute("hidden");
                                document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
                            })
                        })
                    })
                })
            })
        })
    })
})



// Iteration 3 using async/await
//obtainInstruction('broccoli', 0)

function printStep(step) {
  return obtainInstruction('broccoli', step)
    .then((stepC) => {
      document.querySelector("#broccoli").innerHTML += `<li>${stepC}</li>`
    })
}

async function runSteps() {
  try {
    const step1 = await printStep(0)
    const step2 = await printStep(1)
    const step3 = await printStep(2)
    const step4 = await printStep(3)
    const step5 = await printStep(4)
    const step6 = await printStep(5)
    const step7 = await printStep(6)
    const lastText = document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    const showImage = document.querySelector("#broccoliImg").removeAttribute("hidden");
  }
  catch (error) {
    console.log("Error:", error);
  }
}

runSteps()



// Bonus 2 - Promise all
const promise1 = new Promise((resolve, reject) => {
  resolve(obtainInstruction('brusselsSprouts', 0));
});

const promise2 = new Promise((resolve, reject) => {
  resolve(obtainInstruction('brusselsSprouts', 1));
});

const promise3 = new Promise((resolve, reject) => {
  resolve(obtainInstruction('brusselsSprouts', 2));
});

const promise4 = new Promise((resolve, reject) => {
  resolve(obtainInstruction('brusselsSprouts', 3));
});

const promise5 = new Promise((resolve, reject) => {
  resolve(obtainInstruction('brusselsSprouts', 4));
});

const promise6 = new Promise((resolve, reject) => {
  resolve(obtainInstruction('brusselsSprouts', 5));
});

const promise7 = new Promise((resolve, reject) => {
  resolve(obtainInstruction('brusselsSprouts', 6));
});

const promise8 = new Promise((resolve, reject) => {
  resolve(obtainInstruction('brusselsSprouts', 7));
});


async function handlePromiseAll() {
  try {
    const values = Promise.all([promise1, promise2, promise3, promise4, promise5, promise6, promise7, promise8])
    .then((values) => {
      values.forEach((instruc) => {
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruc}</li>`;
      });
      const lastText = document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
      const showImage = document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    })
    
  }
  catch (error) {
    console.log(error);
  }
}

handlePromiseAll()