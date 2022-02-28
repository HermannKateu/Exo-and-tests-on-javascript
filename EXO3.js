function division(x,y) {
  let div;
  return (x==0 && y==0)? div='Impossible to divide a number by "0"':
  (x==0 && y!==0)? div='The result is "0"' :
  (x!==0 && y!==0)? div=x/y:
  (typeof x!=="number" || typeof y !== "number")? div=`Expected number but {x} and {y} given`: 
  div = ""
 }