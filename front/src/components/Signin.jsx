import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import '../generalStyle.css'

function Signin() {

    const[name, setUsername]=useState('');
    const[email, setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[rptpassword,setRptpassword]=useState('');
    const[errorPassword, setErrorpassword]=useState(0);
    const history=useNavigate();

    const handleSingin=async(e)=>{
        e.preventDefault();


        if(password===rptpassword){
            try {
              
              const config={
                Headers:{
                  "Content-type": "application/json"
                }
              }

              const {data}= await axios.post("http://localhost:9000/api/users",
              {name,email,password},config);

              //console.log(data)

              alert("The registration was succesfull "+data.name+"!");
              history("/");

            } catch (error) {
              alert(error.response.data.message+"; use another email to sign up")
              setEmail('');
              setPassword('');
              setRptpassword('');
            }
        }else{
            setErrorpassword(1);
            setPassword('');
            setRptpassword('');
        }
    }

  return (
    <div className="container vh-100">
      <Link className="btn btn-outline-danger mt-4 ml-4" to="/">Back to Login</Link>
      <div className="row d-flex justify-content-center">
        <div className="card col-12 col-md-4 m-4">
          <div className="card-body">
            <h5 className="card-title">Fill the form to Sing up!</h5>
            <form onSubmit={handleSingin} className='d-flex flex-column'>
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username" 
                value={name}
                onChange={(e)=>setUsername(e.target.value)} />

              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)} />

              <label htmlFor="pssword">Password:</label>
              <input 
                type="password" 
                id="pssword" 
                value={password}
                onClick={(e)=>setErrorpassword(0)}
                onChange={(e)=>setPassword(e.target.value)} 
                minLength="10"/>

              <label htmlFor="repeatpsswrd">Repeat Password:</label>
              <input 
                type="password" 
                id="repeatpsswrd" 
                value={rptpassword}
                minLength="10"
                onChange={(e)=>setRptpassword(e.target.value)}/>

              <br/>
              <button className="btn btn-success" type="submit">Sign up!</button>
              {
                errorPassword===1 ? 
                <h6 
                className='text-danger m-4 text-center'>Las contraseñas no son iguales</h6> 
                :
                <div></div>
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin