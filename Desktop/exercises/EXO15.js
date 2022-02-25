const add= (x,y) =>{
  return new Promise((resolve,reject)=>{
    if(x!=="number" || y!=="number"){
      reject('Must enter the two parameters')
    }
  })
}
