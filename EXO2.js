const daysLeftToChristmas= (year) =>{
  const today= new Date().getTime();
  const nextChristmas= new Date(`${year}`,11,25);
  if((nextChristmas-today) < 0){ 
    return `${Math.ceil(-1*(nextChristmas-today)/(3600000*24))} days had already passed since ${year}`
  }
  else{
   return `Reamaning ${Math.ceil((nextChristmas-today)/(24 * 3600000))} days for the next Christmas`;
  }
}