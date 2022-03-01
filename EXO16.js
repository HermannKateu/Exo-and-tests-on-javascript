const multiplication = (firstValue,secondValue) => {
    let multiplier;
    if(firstValue==0 || secondValue==0){
       multiplier='Any multiplication by 0 is "0"';
    } 
    else if(firstValue!==0 && secondValue!==0){
       multiplier = firstValue*secondValue;
    }
    return multiplier;
}