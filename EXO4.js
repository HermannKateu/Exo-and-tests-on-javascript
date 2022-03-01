const longestStringOfArray = (array) => {
  return array.reduce((previous, current)=>{
    if(previous.length>current.length){
      return previous
    } 
    else{
      return current
    };  
  })
}