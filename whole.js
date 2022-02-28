const guesting= (guestNumber) => {
  let min=1;
  let max=10
  const randomNumber= Math.floor(Math.random() * (max - min + min) + min);
  Math.ceil(min);
  Math.floor(max);
  return (guestNumber == randomNumber)? 'GOOD WORK!!!!!!!':'NOT MATCHED';
}


const christMas= (year) =>{
  const today= new Date().getTime();
  let nextChrist= new Date(`${year}`,11,25);
return ((nextChrist-today) < 0)? `${Math.ceil(-1*(nextChrist-today)/(3600000*24))} days had already passed since ${year}`:`Reamaning ${Math.ceil((nextChrist-today)/(24 * 3600000))} days for the next Christmas`;
}
   


function sumOfCubes(max){
    let sum=0;
    for(let i=0; i<(max+1); i++){
       sum += Math.pow(i,3)
    }
    return sum
  }


const student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12 
};

console.log(student)
delete student.rollno;
console.log(student);


const volumeOfCylinder= (Radius,Height) =>{
  const PI=3.1416;
  const volume=(2*PI*Radius*Height)
  return volume;
}
    
    
function determiner(string) {
  return (string==string.toLowerCase())?true:false;
}


function longestString(arr){
  return arr.reduce((prev,curr)=>{
    if(prev.length>curr.length) return prev
    else{
      return curr;
    }
  })
} 
  
const largestInt = (arr) => {
  const evenNumbers=arr.filter(number => number%2==0)
  return Math.max(...evenNumbers)
}


function multiplication(x,y) {
    let mult;
    return (x==0 || y==0)? mult='Any multiplication by 0 is "0"': 
    (typeof x!== "number" && typeof y!=="number")? mult=`Expected number but {x} and {y} given`: 
    (x!==0 && y!==0)? mult=x*y:
    mult = '';
}



function division(x,y) {
    let div;
     return (x==0 && y==0)? div='Impossible to divide a number by "0"':
     (x==0 && y!==0)? div='The result is "0"' :
     (x!==0 && y!==0)? div=x/y:
     (typeof x!=="number" || typeof y !== "number")? div=`Expected number but {x} and {y} given`: 
    div = ""
}

const comparism=(obj1,obj2)=>{
  const objectVal1=Object.values(obj1);
  const objectVal2=Object.values(obj2); 
  const verify= objectVal1.filter(item=>objectVal2.includes(item))
 return (verify.length>0)?true:false;
}


function filtered(arr,...elem) {
  return arr.filter(number => elem.every(number2 => number2 !== number));
}



const deleteCharacter = (str) =>{
  const container= new Set(str.split(''))
  let array=[];
  array.push(...container)
  return array.join('');
}
 


const extract = (arr, posi) => posi.map(x => arr[x])


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
add().then((result)=>result).catch(error=>error);
add(2, 4).then((result)=>result).catch(error=>error);

  
function clock(){
  let today=new Date()
  let hours=today.getHours();
  let minutes=today.getMinutes();
  let seconds=today.getSeconds();
  `${hours}:${minutes}:${seconds}`
  setInterval(clock,1000)
}

export{ guesting, christMas, clock, add, extract, deleteCharacter, filtered,
  comparism, division, multiplication, largestInt, longestString, determiner,
  volumeOfCylinder, sumOfCubes }