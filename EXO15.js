const add= (x=null,y=null) =>{
    return new Promise((resolve,reject)=>{
        if(typeof x!=="number" || typeof y!=='number'){
            reject('Must enter the two parameters')     
        }
        else{
            resolve(x+y);
        }
    })
}
add().catch(error=>console.log(`Error: ${error}`));
add(2, 4).then(result=>`sum = ${result}`);