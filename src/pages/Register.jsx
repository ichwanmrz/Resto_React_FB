import React, { useState, useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import firebaseApp from "../config/firebaseConfig";
import { collection, getFirestore, setDoc, doc } from 'firebase/firestore';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Form, Button, Row, Col, Container, Alert } from 'react-bootstrap'
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const auth = getAuth(firebaseApp);
  const navigate = useNavigate();
  
  const errorDict = {
    "auth/wrong-password": "Password anda salah!",
    "auth/internal-error": "Password harus diisi!",
    "auth/invalid-email": "Email harus diisi!",
    "auth/user-not-found": "User tidak ditemukan!"
  };

  const [credentials, setCredentials] = useState({
      username:"",
      email: '',
      password: ''
  })


  const [profile, setProfile] = useState({
      username: "",
      email: "",
      password: "",
      address:"",
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

  //cekkk

  // useEffect(() => {
  //     if(user !== undefined)
  //     navigate.push('/login', { replace: true });
  //       signOut(auth)
  // }, [user, auth, navigate]);

  const registerHandler =  async () => {
    await createUserWithEmailAndPassword(
      credentials.email,
      credentials.password
    ) 
  }

  return (
    <div>
      <Header/>
      <Container className="d-flex justify-content-center align-items-center mt-4 mb-5" style={{height: 'auto', width: '30vw'}}>
        <Row style={{ width: '50vw'}}>
          <Col className="d-flex justify-content-center flex-column rounded p-4 bg-success" style={{ height: "auto" }}>
            <h1 className="mb-3">Register</h1>

            <Form>
              <Form.Group className="mb-3 fs-5" >
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter username"
                  // onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  // onKeyDown={(e) => e.key === "Enter" && registerHandler()}
                  // value={credentials.username}
                  onChange={(e) => setProfile({...profile, username: e.target.value})} value={profile.username}
                  />
              </Form.Group>

              <Form.Group className="mb-3 fs-5">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email address"
                  // onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                  // onKeyDown={(e) => e.key === "Enter" && registerHandler()}
                  // value={credentials.email}
                  onChange={(e) => setCredentials({...credentials, email: e.target.value})}  value={credentials.email}
                  // onChange={(e) => setProfile({...profile, email: e.target.value})} value={profile.email}
                  />
              </Form.Group>

              <Form.Group className="mb-3 fs-5">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                  // onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  // onKeyDown={(e) => e.key === "Enter" && registerHandler()}
                  // value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})} value={credentials.password}
                  // onChange={(e) => setProfile({...profile, password: e.target.value})} value={profile.password}
                  />
              </Form.Group>

              <Form.Group className="mb-3 fs-5">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address"
                  // onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  // onKeyDown={(e) => e.key === "Enter" && registerHandler()}
                  // value={credentials.password}
                  onChange={(e) => setProfile({...profile, address: e.target.value})} value={profile.address}
                  />
              </Form.Group>

              <div className="d-flex justify-content-end mb-3">
                <Button disabled={loading} className="" variant="primary" type="submit" onClick={registerHandler}>
                  {/* {loading && 
                  (<Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>)
                  } */}
                  {loading ? "Loading..." : "Register"}
                </Button>
              </div>
              <span className="d-flex justify-content-start align-items-center">Sudah punya akun ? &nbsp;
              <Link as={Link} to="/login"><a className="text-light">Login here</a></Link>
              </span>
            </Form>
          </Col>
          {error && (
                <Alert variant="danger">{error && errorDict[error.code]}</Alert>
              )}
        </Row>
      </Container>
      <Footer/>
    </div>
  )
}

export default Register

