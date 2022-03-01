const matchInputWithRandom = (inputNumber) => {
  const min=1;
  const max=10;
  const randomNumber = Math.floor(Math.random() * (max - min + min) + min);
  Math.ceil(min);
  Math.floor(max);
  return (inputNumber == randomNumber)? 'GOOD WORK!!!!!!!' : 'NOT MATCHED';    
}


const daysLeftToChristmas = (year) =>{
  const today= new Date().getTime();
  const nextChristmas= new Date(`${year}`,11,25);
  if((nextChristmas-today) < 0){ 
    return `${Math.ceil(-1*(nextChristmas-today)/(3600000*24))} days had already passed since ${year}`
  }
  else{
   return `Reamaning ${Math.ceil((nextChristmas-today)/(24 * 3600000))} days for the next Christmas`;
  }
}
   


const sumOfCubes = (maximumNumber) => {
  let summingToMaximun=0;
  for(let i=0; i<(maximumNumber+1); i++){
     summingToMaximun += Math.pow(i,3)
  }
  return summingToMaximun
}


const deleteObjectProperty = (object, property) =>{
  if(object.hasOwnProperty(property)){
    delete object[property];
  }
 return object;
} 


const volumeOfCylinder= (radius,height) =>{
  const PI=3.1416;
  const volume=(2*PI*radius*height)
  return volume;
}
    
    
const stringVerification = (value) => {
  return (value==value.toLowerCase())
}

const longestStringOfArray = (array) => {
  return array.reduce((previous, current)=>{
    if(previous.length>current.length)
      return previous;
    else{
      return current
    };  
  })
}
  
const largestIntegerOfArray = (array) => {
  const evenNumbers = array.filter(number => number%2 == 0)
  return Math.max(...evenNumbers)
}



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



const division = (numerator, denominator) => {
  let divider;
  if(numerator !==0 && denominator==0){ 
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

const comparismOfTwoObjects=(firstObject,secondObject)=>{
  const objectFirstValues=Object.values(firstObject);
  const objectSecondValues=Object.values(secondObject); 
  const verificationOfValues = objectFirstValues.filter(items => objectSecondValues.includes(items))
  return (verificationOfValues.length>0);
}


const filteringArray = (array,...precisedValues) =>{
  return array.filter(elementOfArray => precisedValues.every(element => element !== elementOfArray));
}


const deleteRepeatedCharacter = (string) =>{
  const container= new Set(string.split(''))
  const array=[];
  array.push(...container)
  return array.join('');
}
 


const extractingSpecifiedIndex = (array, specifiedIndex) => specifiedIndex.map(x => array[x])


const add = (x=null,y=null) =>{
  return new Promise((resolve,reject)=>{
      if(typeof x!=="number" || typeof y!=='number'){
          reject('Must enter the two parameters')     
      }
      else{
          resolve(x+y);
      }
  })
}
add().then((result)=>result).catch(error=>error);
add(2, 4).then((result)=>result).catch(error=>error);

  
const clock = () => {
  const today=new Date()
  const hours=today.getHours();
  const minutes=today.getMinutes();
  const seconds=today.getSeconds();
  `${hours}:${minutes}:${seconds}`;
  setInterval(clock,1000)
}

export{ matchInputWithRandom, daysLeftToChristmas, deleteObjectProperty,clock, add, extractingSpecifiedIndex, deleteRepeatedCharacter, filteringArray,
  comparismOfTwoObjects, division, multiplication, largestIntegerOfArray, longestStringOfArray, stringVerification,
  volumeOfCylinder, sumOfCubes }