const deleteCharacter = (str) =>{
    const container= new Set(str.split(''))
    let array=[];
    array.push(...container)
    return array.join('');
  }
  console.log(deleteCharacter('aabcddeef'))