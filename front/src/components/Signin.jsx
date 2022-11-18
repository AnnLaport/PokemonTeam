import React, {useState} from 'react'
import '../generalStyle.css'

function Signin() {

    const[username, setUsername]=useState('');
    const[email, setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[rptpassword,setRptpassword]=useState('');

    const handleSingin=(e)=>{
        e.preventDefault();

        console.log('sending data'+username+'..'+email);
    }

  return (
    <div className="container vh-100">
      <div className="row d-flex justify-content-center">
        <div className="card col-12 col-md-4 m-4">
          <div className="card-body">
            <h5 className="card-title">Fill the form to Sing up!</h5>
            <form onSubmit={handleSingin} className='d-flex flex-column'>
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username" 
                value={username}
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
                onChange={(e)=>setPassword(e.target.value)} />

              <label htmlFor="repeatpsswrd">Repeat Password:</label>
              <input 
                type="password" 
                id="repeatpsswrd" 
                value={rptpassword}
                onChange={(e)=>setRptpassword(e.target.value)}/>

              <br/>
              <button className="btn btn-success" type="submit">Sign up!</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin