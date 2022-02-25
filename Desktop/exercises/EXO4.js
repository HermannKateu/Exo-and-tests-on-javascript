function longestString(arr){
    return arr.reduce((prev,curr)=>{
      if(prev.length>curr.length) return prev
      else{
        return curr;
      }
    })
   }