import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Form, Row } from "react-bootstrap";
import firebaseApp from "../config/firebaseConfig";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { getFirestore, collection, updateDoc, doc, onSnapshot } from "firebase/firestore";
import { useCollection } from 'react-firebase-hooks/firestore';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Auth from "./Auth";
import { updateCurrentUser } from "firebase/auth";

const UpdateProfile = (item) => {
    const auth = getAuth(firebaseApp);
const [show, setShow] = useState(false);
const [user] = useAuthState(auth);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const [detail, setDetail] = useState(null);
  const [loading] = useState(false);

  const db = getFirestore(firebaseApp);

  const [resto, setResto] = useState({
    username: "",
    email: "",
    address: "",
    image: "",
  });

//   useEffect(() => {
//     const view = doc(db, "Resto", user));
//     onSnapshot(view, (snapshot) => {
//       setDetail({ ...snapshot.data(), id: snapshot.user });
//     });
//   }, [db, id]);

  const UpdateHandler = async () => {
    const restoRef = doc(db, "Resto", user);
    try {
      await updateCurrentUser(restoRef,resto);
      setShow(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Button variant="outline-primary mx-auto" onClick={handleShow}>
        Edit Account <FontAwesomeIcon icon={faPen} />
      </Button>

      <Modal show={show} onHide={handleClose} className="text-dark">
        <Modal.Header closeButton>
          <Modal.Title >Update your Profile :</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="g-3">
            <Col md={6}>
                <Form.Label>Nama :</Form.Label>
                <Form.Control
                type="text"
                className='bg-secondary'
                onChange={(e) => setResto({ ...resto, username: e.target.value })}
                defaultValue={resto.username}/>
            </Col>

            <Col md={6}>
                <Form.Label>Email :</Form.Label>
                <Form.Control
                type="text"
                className='bg-secondary'
                onChange={(e) => setResto({ ...resto, email: e.target.value })}
                defaultValue={resto.email}/>
            </Col>

            <Col md={6}>
                <Form.Label>Address :</Form.Label>
                <Form.Control
                type="text"
                className='bg-secondary'
                onChange={(e) => setResto({ ...resto, address: e.target.value })}
                defaultValue={resto.address}/>
              </Col>

            <Col md={12}>
                <Form.Label>Image (Url) :</Form.Label>
                <Form.Control
                type="file"
                className='bg-secondary'
                onChange={(e) => setResto({ ...resto, image: e.target.value })}
                defaultValue={resto.image}/>
            </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            disabled={loading}
            onClick={() => UpdateHandler()}
          >
            {loading ? "Loading" : "Update"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default UpdateProfile