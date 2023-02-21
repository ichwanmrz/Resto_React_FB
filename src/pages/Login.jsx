import React, { useState, useEffect } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import firebaseApp from "../config/firebaseConfig";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Form, Button, Row, Col, Modal, Alert } from 'react-bootstrap'
import { useNavigate, Link } from "react-router-dom";
// import { GoogleButton } from "react-google-button";

const Login = () => {
  const auth = getAuth(firebaseApp);
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const errorDict = {
    "auth/wrong-password": "Wrong password!",
    "auth/internal-error": "Password required!",
    "auth/invalid-email": "Email invalid!",
    "auth/user-not-found": "User not found!"
  };


  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, userGoogle, , ] = useSignInWithGoogle(auth);

  useEffect(() => {
      if(user || userGoogle !== undefined)
      navigate('/profile', { replace: true });
  }, [user, userGoogle, navigate])

  const loginHandler = () => {
    signInWithEmailAndPassword(credentials.email, credentials.password);
    console.log(auth.currentUser);
  };

  const triggerResetEmail = async () => {         
    console.log(email);         
    await sendPasswordResetEmail(auth, email )
    alert("Password Reset Email Sent")
    // console.log("Password reset email sent");     
}  

  return (
    <div>
      <Header/>
    <Row>
        <Col xs={12} md={{span: 4, offset: 6}} className="bg-success p-4 rounded mt-3">
            <h2 className='text-light text-center mb-3'>Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email address" 
                    onKeyDown={(e) => e.key === 'Enter' && loginHandler()} onChange={(e) => setCredentials({...credentials, email: e.target.value})} value={credentials.email} 
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" 
                        onKeyDown={(e) => e.key === 'Enter' && loginHandler()} 
                        onChange={(e) => setCredentials({...credentials, password: e.target.value})} value={credentials.password} 
                    />
                    <Button variant="outline-light mt-2 mb-3" onClick={handleShow}>Forgot Password ?</Button>
                    <Modal show={show} onHide={handleClose} className="text-dark" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Reset Password</Modal.Title>
                            </Modal.Header>
                            <Modal.Body> 
                                <p>Enter Your Registered Email :</p>
                                <Form.Text show={show} onHide={handleClose}>
                                <input  className="resetEmailInput" placeholder="Email" type="email" value={email} 
                                onChange={e => setEmail(e.target.value)} required /> 
                                </Form.Text>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button disabled={loading} onClick={triggerResetEmail}>
                                {loading ? 'loading...' : 'Send Link to Email'}
                                </Button>
                            </Modal.Footer>
                      </Modal>
                       <span className="d-flex justify-content-start align-items-center">If you don't have account, &nbsp;
                      <Link as={Link} to="/register"  className=" text-light">Register here.</Link>
                      </span>
                </Form.Group>
                
                <Button 
                disabled={loading} variant="primary" type="submit" onClick={loginHandler}>
                    {loading ? 'loading...' : 'Login'}
                </Button>
                <Button className="mx-2" variant="danger" type="button" onClick={() => signInWithGoogle()}>
                  Sign in with Google</Button>
            </Form>
        </Col>
        {error && (
                <Alert variant="danger">{error && errorDict[error.code]}</Alert>
              )}
    </Row>
    <Footer/>
</div>
  )
}

export default Login

