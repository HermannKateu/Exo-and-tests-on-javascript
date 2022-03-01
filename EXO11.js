const deleteObjectProperty = (object, property) =>{
    if(object.hasOwnProperty(property)){
      delete object[property];
    }
   return object;
  } 
  console.log( deleteObjectProperty({name:'john',sex:'male',age:20},'age'));