import React, {useEffect} from 'react'


function Cerrarsesion() {
useEffect(()=>{

  const borradosesion=()=>{
    localStorage.removeItem("userInfo");
    window.location.replace("http://localhost:3000/");
  }
  borradosesion();
},[])


  return (
    <div>Redirigiendo...</div>
  )
}

export default Cerrarsesion