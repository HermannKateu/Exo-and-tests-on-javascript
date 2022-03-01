const deleteRepeatedCharacter = (string) =>{
  const container= new Set(string.split(''))
  const array=[];
  array.push(...container)
  return array.join('');
}