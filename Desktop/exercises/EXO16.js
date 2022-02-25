function multiplication(x,y) {
    let mult;
    return (x==0 || y==0)? mult='Any multiplication by 0 is "0"': 
    (typeof x!== "number" && typeof y!=="number")? mult=`Expected number but {x} and {y} given`: 
    (x!==0 && y!==0)? mult=x*y:
    mult = '';
}
console.log(multiplication(2,0))