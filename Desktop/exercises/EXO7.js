function sumOfCubes(max){
    let sum=0;
    for(let i=0; i<(max+1); i++){
       sum += Math.pow(i,3)
    }
    return sum
  }
  console.log(sumOfCubes(3))
  