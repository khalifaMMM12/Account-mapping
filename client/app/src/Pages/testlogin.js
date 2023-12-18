
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

// import { Routes } from "../../routes";
// import BgImage from "../../assets/img/illustrations/signin.svg";

function Testlogin(){

  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");

  const[error, setError] = useState('')


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
        console.log(code)
        window.location.href = "/officer"

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
        <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <Row className="justify-content-center form-bg-image" style={{ }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Login Account Mapping</h3>
                </div>
                <Form className="mt-4">
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>User Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="text" placeholder="User Name" onChange={(e) => setusername(e.target.value)}/>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control  type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" className="form-control" placeholder="Password"/>
                        <Button className="btn btn-outline-secondary" onClick={togglePassword} >
                      { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
                      </Button>
                      </InputGroup>
                    </Form.Group>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100" onClick={forLogin}>
                    log in
                  </Button>
                </Form>

              </div>
            </Col>
          </Row>        </Container>
      </section>
    </main>
  );
};

export default Testlogin
