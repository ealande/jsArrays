function heavyFunction(){
    let executions = 0;
    for (let i = 0; i < 10000000000; i++){
    executions++;}
    return executions
}
const heavyFunctinPromise = new Promise((resolve, reject)=> {
    try{
        let executions = 0;
        for (let i = 0; i < 1000000000; i++){
            executions++;
    }
    resolve(executions);
} catch(e){
    reject('Error in the number interation')
}
})

const promisseWithParameters = (login, password) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (`Logged in with the user: ${login}`)
        }, 3000)
    }
)}

console.log ("begin");
//console.log(heavyFunction());

heavyFunctinPromise.then(result => console.log(result)).catch(erro=>console.log(erro));

console.log("end");

async function mainExecution(){
    console.log ("begin");
    //await heavyFunctinPromise.then(result => console.log(result)).catch(erro=>console.log(erro));

    promisseWithParameters('erick@gmail.com', 123456).then(result => {
        console.log(result)
    });
    try {
        const result = await heavyFunctinPromise;
        console.log(result);
    }catch(e){
        console.log(e);
    }
    console.log("end");
}

mainExecution();

