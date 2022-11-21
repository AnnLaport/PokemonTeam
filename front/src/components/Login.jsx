import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios'
import  '../styles.css';
import {Circles} from 'react-loader-spinner';

function Login() {

  const[email, setEmail]=useState('');
  const[password, setPassword]=useState('');
  const[loading, setLoading]=useState(0);
  const[error, setError]=useState({key:0, msg:"its ok"});
  const history=useNavigate();

  const handlerLogin= async(e)=>{
    e.preventDefault();

    try {
      const config={
        Headers:{
          "Content-type": "application/json"
        }
      }
      setLoading(1);

      const {data}= await axios.post("http://localhost:9000/api/login",
      {email,password},config)

      console.log(data);
      setLoading(0);
      setError({key:0, msg:"its ok"})
      localStorage.setItem("userInfo", JSON.stringify(data))
      history("/teamedit");
      

    } catch (error) {
      setLoading(0);
      setError({key:1, msg:error.response.data.message})
      setPassword('');
    }
  }

  useEffect(()=>{
    const userInfo= localStorage.getItem("userInfo");

    if(userInfo){
      history("/teamedit");
    }
  },[history])

  return (
    <div className="login">
        {
          loading===1 ? 
            <Circles
              height="80"
              width="80"
              color="#f4f5ff"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          :
          <div className='login-card'>
          <h2>Login</h2>
          <h3>Enter your credentials</h3>
          <form 
          className="login-form"
          onSubmit={handlerLogin}>

          <input className="form-control m-1" 
          type="email" 
          placeholder="email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
          />
      
          <input 
          className="form-control" 
          type="password" 
          placeholder="password"
          value={password}
          onChange={e=>setPassword(e.target.value)} />

          {
            error.key===1 ?
              <h6 className='text-danger'>{error.msg}</h6>
            :
              <h6>Registration is free!</h6>
          }

          <Link className="linkregister" to='/signin'>Click here if you dont have an account</Link>
          <br />
          <button 
          className='btn btn-light' 
          type='submit'>Login</button>
          </form>
        </div>
        }
    </div>
  );
}

export default Login;