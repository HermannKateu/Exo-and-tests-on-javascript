const matchInputWithRandom = (inputNumber) => {
    const min=1;
    const max=10;
    const randomNumber = Math.floor(Math.random() * (max - min + min) + min);
    Math.ceil(min);
    Math.floor(max);
    return (inputNumber == randomNumber)? 'GOOD WORK!!!!!!!' : 'NOT MATCHED';    
}

