const christMas= (year) =>{
  const today= new Date().getTime();
  let nextChrist= new Date(`${year}`,11,25);
return ((nextChrist-today) < 0)? `${Math.ceil(-1*(nextChrist-today)/(3600000*24))} days had already passed since ${year}`:`Reamaning ${Math.ceil((nextChrist-today)/(24 * 3600000))} days for the next Christmas`;
}
console.log(christMas(2003))