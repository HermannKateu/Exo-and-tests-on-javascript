const largestIntegerOfArray = (array) => {
  const evenNumbers = array.filter(number => number%2 == 0)
  return Math.max(...evenNumbers)
}

