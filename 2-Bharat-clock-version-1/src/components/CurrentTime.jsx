let CurrentTime =()=>{

  let time = new Date();

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return <h1>This is the current Date :{time.toLocaleDateString()} Time : {`${hours}:${minutes}:${seconds}`} </h1>

}
export default CurrentTime;