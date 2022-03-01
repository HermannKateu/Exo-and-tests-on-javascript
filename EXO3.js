const division = (numerator, denominator) => {
  let divider;
  if(numerator !==0 && denominator ==0){ 
    divider='Impossible to divide a number by "0"';
  }
  else if(numerator==0 && denominator!==0){
    divider='The result is "0"';
  }   
  else if(numerator!==0 && denominator!==0){
    divider = numerator/denominator;
  }
  else if(typeof numerator !== 'number' || typeof denominator !== 'number'){
    divider=`Expected number to be entered`;
  } 
  return divider;
}