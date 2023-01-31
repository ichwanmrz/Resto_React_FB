import React from "react";
import { useEffect, useState } from 'react';
import firebaseApp from '../config/firebaseConfig'
import {collection, getFirestore} from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { getAuth } from 'firebase/auth';
import Header from "../components/Header";
import {Container, Row, Col, Card, CardGroup, Image } from 'react-bootstrap';
// import cafe1 from "../images/laxbw-prime-1715-hor-wide.webp";
// import cafe2 from "../images/maras-restaurant-interior-1.jpg";
// import cafe3 from "../images/La-Colombe-Restaurant_Andrea-van-der-Spuy_2018_La-Colombe-183.webp"

const Home = () => {
  const auth = getAuth(firebaseApp)
  const [value, loading, error] = useCollection(
      collection(getFirestore(firebaseApp), 'Resto'),
      {
        snapshotListenOptions: { includeMetadataChanges: true },
      }
    ); 
  
    useEffect(() => {
      console.log(value);
    }, [value])

  return (
      <div>
      <Header/>
      <Container className=" mt-5 text-dark w-75 h-25 "> 
      <Row  >
      <Col xs={12}> 
      <>
      {['Success','Primary','Danger'].map((variant) => (
      <CardGroup className="gap-lg-3"> {value && value.docs.map((doc) => (
        <Card key={doc.id} 
        bg={variant.toLowerCase()}
        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        style={{ width: '18rem' }}
        className="mb-2">
          <Image src={doc.data().image} alt="image" className="img-thumbnail w-75 m-auto mt-3"/>
          <Card.Body key={variant}>
            <><Card.Title > <h2><u>{doc.data().cafe}</u></h2></Card.Title>
            <h4>Owner : {doc.data().username}</h4>
            <h6>Alamat : {doc.data().address}</h6>
            <h6>Kategori : {doc.data().category}</h6>
            <Card.Text>" {doc.data().description} "</Card.Text></>
          </Card.Body>
          <Card.Footer>
            <small className="text-light">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        ))}
      </CardGroup>
       ))}
       </>
      </Col>
      </Row>
      
      {/* <CardGroup>
      <Card>
          <Card.Img variant="top" src={cafe1} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={cafe2} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={cafe3} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. 
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup> */}
      </Container>
      </div>
  );
}

export default Home