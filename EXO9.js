function filtered(arr,...elem) {
    return arr.filter(number => elem.every(number2 => number2 !== number));
}
console.log(filtered([1,3,43,5,56,765],1,3))