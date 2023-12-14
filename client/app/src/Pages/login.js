import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Inputgroup from 'react-bootstrap/InputGroup';
import './App.css';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function LoginForm (){
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");

  const[error, setError] = useState('')
  const windows = useLocation();


  const forLogin = async () => {  
    try {
      const response = await axios.post('http://localhost:3000/api/login',{
        username, password
      });

      let code = response.data.code;
      let msg = response.data.msg;

      console.log(msg); 

      if (code === 200){
    
        setError('')
        windows.location.href="/officer"
      }else{
        setError(msg)
      }
    } catch (error) {
      // console.error(error.response.data); 
    }
  };

  const handlePasswordChange =(event)=>{
      setPasswordInput(event.target.value);
      setPassword(event.target.value);


    }
    const togglePassword =(e)=>{
      e.preventDefault()
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
       setPasswordType("password")
    }

  return (
    <div className='m-5'>
      <div className='row'>
        <div className='col-md-5'>
          <div className='card m-4 shadow-lg'>
            <div className='card-body'>
              <Form>
                <h3>Login Account Mapping</h3>
              <div className="form-group mt-3">
                <label>User Name</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    onChange={(e) => setusername(e.target.value)}
                    placeholder='username'
                    />
              </div>
              <div className="form-group mt-3">
                  <label>Password</label>


                  <Inputgroup>
                  <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" className="form-control" placeholder="Password" />
                      <button className="btn btn-outline-secondary" onClick={togglePassword} >
                      { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
                      </button>
                    </Inputgroup>
              </div>
                <div className="d-grid">
                <Button className="mt-3" variant="primary" onClick={forLogin}>Login</Button>
                <label>{error}</label>
                </div>
                
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default LoginForm;