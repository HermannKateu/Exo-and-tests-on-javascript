const comparismOfTwoObjects = (firstObject,secondObject) => {
  const objectFirstValues=Object.values(firstObject);
  const objectSecondValues=Object.values(secondObject); 
  const verificationOfValues = objectFirstValues.filter(items => objectSecondValues.includes(items))
  return (verificationOfValues.length>0) ? true : false;
}
