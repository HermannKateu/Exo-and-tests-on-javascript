const largestInt = (arr) => {
  const evenNumbers=arr.filter(number => number%2==0)
  return Math.max(...evenNumbers)
}

console.log(largestInt([23,4,6,8,33,12,88,24,22]))
