const equalObject = (object1, object2) =>{
  const object1Property = Object.keys(object1);
  const object2Property = Object.keys(object2);
  const status = [];
  if(object1Property.length == object2Property.length){
      for(const property in object1){
      status.push((object2.hasOwnProperty(`${property}`) && object1[property]==object2[property]))    
      }
    return  status.filter(item => item===false).length === 0;
  }
  return false;
}
