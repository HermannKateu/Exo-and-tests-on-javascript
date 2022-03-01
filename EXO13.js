const  clock = () =>{
  const today=new Date()
  const hours=today.getHours();
  const minutes=today.getMinutes();
  const seconds=today.getSeconds();
  `${hours}:${minutes}:${seconds}`;
  setInterval(clock,1000)
}




