import React, { useState, useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { firebaseAuthError } from '../constants/errors';
import firebaseApp from "../config/firebaseConfig";
import { collection, getFirestore, setDoc, doc } from 'firebase/firestore';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Form, Button, Row, Col, Alert } from 'react-bootstrap'
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const auth = getAuth(firebaseApp);
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
      username:"",
      email: '',
      password: ''
  })

  const [profile, setProfile] = useState({
      username: "",
      email: "",
      password: "",
      // address:"",
  })

  const [
      createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth)

  useEffect(() => {
      const createProfile = async () => {
          const db       = getFirestore(firebaseApp)
          const userRef  = collection(db, 'Resto')
          try {
              await setDoc(doc(userRef),{...profile, uid: user.user.uid})
          } catch (error) {
              console.log(error.message)
          }
      }

      if(user !== undefined && error === undefined)
          createProfile().then(() => {
          navigate('/login', { replace: true });
      })
  }, [user, navigate, profile, error])

  const registerHandler =  async () => {
    await createUserWithEmailAndPassword(
      credentials.email,
      credentials.password
    ) 
  }

  return (
    <div>
       <Header/>
        <Row>
        {error && <Col xs={12} md={{span: 6, offset: 3}} className="g-0">
                <Alert variant="danger">{error.code in firebaseAuthError ? firebaseAuthError[error.code] : 'Oops, something went wrong in the server room!'}</Alert>
            </Col>}
            <Col xs={12} md={{span: 4, offset: 2}} className="bg-success p-3 rounded mt-0">
            <h2 className='text-light text-center mb-2'>Register</h2>
                <Form>
                <Form.Group className="mb-1">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" 
                        onChange={(e) => setProfile({...profile, username: e.target.value})} value={profile.username}
                        />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email address" 
                        onChange={(e) => setCredentials({...credentials, email: e.target.value})}  value={credentials.email}
                        />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" 
                        onChange={(e) => setCredentials({...credentials, password: e.target.value})} value={credentials.password}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Enter your location" 
                            onChange={(e) => setProfile({...profile, address: e.target.value})} value={profile.address}
                        />
                    </Form.Group>

                    <Button variant="primary" disabled={loading} type="submit"  onClick={registerHandler}>
                        {loading ? 'loading...' : 'Register'}
                    </Button>
                    <span className="d-flex justify-content-start align-items-center mt-3">Have account ? &nbsp;
                      <Link as={Link} to="/login" className="text-light">Login here.</Link>
                    </span>
                </Form>
            </Col>
        </Row>
        <Footer/>
    </div>
  )
}

export default Register

