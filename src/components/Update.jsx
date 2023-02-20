import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Form, Row } from "react-bootstrap";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import firebaseApp from "../config/firebaseConfig";
import { getFirestore } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const Update = (item) => {
  const [show, setShow] = useState(false);
  const id = item.itemId;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [detail, setDetail] = useState(null);
  const [loading] = useState(false);

  const db = getFirestore(firebaseApp);

  const [resto, setResto] = useState({
    username: item.item.username,
    cafe: item.item.cafe,
    address: item.item.address,
    category: item.item.category,
    description: item.item.description,
    image: item.item.image,
    product: item.item.product,
    price: item.item.price
  });

  useEffect(() => {
    const view = doc(db, "Resto", id);
    onSnapshot(view, (snapshot) => {
      setDetail({ ...snapshot.data(), id: snapshot.id });
    });
  }, [db, id]);

  const UpdateHandler = async () => {
    const restoRef = doc(db, "Resto", detail.id);
    try {
      await updateDoc(restoRef,resto);

      setShow(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Button variant="outline-light mx-auto" onClick={handleShow}>
        Edit  <FontAwesomeIcon icon={faPen} />
      </Button>

      <Modal show={show} onHide={handleClose} className="text-dark">
        <Modal.Header closeButton>
          <Modal.Title >Update your Resto below :</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="g-3">
            <Col md={6}>
                <Form.Label>Owner :</Form.Label>
                <Form.Control
                type="text"
                className='bg-secondary'
                onChange={(e) => setResto({ ...resto, username: e.target.value })}
                defaultValue={resto.username}/>
            </Col>

            <Col md={6}>
                <Form.Label>Resto Name :</Form.Label>
                <Form.Control
                type="text"
                className='bg-secondary'
                onChange={(e) => setResto({ ...resto, cafe: e.target.value })}
                defaultValue={resto.cafe}/>
            </Col>

            <Col md={6}>
                <Form.Label>Resto Address :</Form.Label>
                <Form.Control
                type="text"
                className='bg-secondary'
                onChange={(e) => setResto({ ...resto, address: e.target.value })}
                defaultValue={resto.address}/>
              </Col>

            <Col md={6}>
                <Form.Label>Resto Category :</Form.Label>
                <Form.Control
                type="text"
                className='bg-secondary'
                onChange={(e) => setResto({ ...resto, category: e.target.value })}
                defaultValue={resto.category}/>
            </Col>

            <Col md={12}>
                <Form.Label>Resto Image (Url) :</Form.Label>
                <Form.Control
                type="text"
                className='bg-secondary'
                onChange={(e) => setResto({ ...resto, image: e.target.value })}
                defaultValue={resto.image}/>
            </Col>

            <Col md={6}>
                <Form.Label>Resto Product :</Form.Label>
                <Form.Control
                type="text"
                className='bg-secondary'
                onChange={(e) => setResto({ ...resto, product: e.target.value })}
                defaultValue={resto.product}/>
            </Col>

            <Col md={6}>
                <Form.Label>Product Price :</Form.Label>
                <Form.Control
                type="number"
                className='bg-secondary'
                onChange={(e) => setResto({ ...resto, price: e.target.value })}
                defaultValue={resto.price}/>
            </Col>

              <Col md={12}>
                <Form.Label>Resto Description :</Form.Label>
                <Form.Control
                as="textarea"
                className='bg-secondary'
                style={{ height: "100px" }}
                onChange={(e) => setResto({ ...resto, description: e.target.value })}
                defaultValue={resto.description}/>
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
  );
};

export default Update;
