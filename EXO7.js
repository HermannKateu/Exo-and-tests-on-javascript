const sumOfCubes = (maximumNumber) => {
   let summingToMaximun=0;
   for(let i=0; i<(maximumNumber+1); i++){
      summingToMaximun += Math.pow(i,3)
   }
   return summingToMaximun
}
  