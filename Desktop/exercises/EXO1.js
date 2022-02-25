const guesting= (guestNumber) => {
    let min=1;
    let max=10
    const randomNumber= Math.floor(Math.random() * (max - min + min) + min);
       Math.ceil(min);
       Math.floor(max);
    return (guestNumber == randomNumber)? 'GOOD WORK!!!!!!!':'NOT MATCHED';
    
}
console.log(guesting())
