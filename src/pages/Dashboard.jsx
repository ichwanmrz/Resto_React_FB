import React from "react";
import { useEffect, useState } from 'react';
import firebaseApp from '../config/firebaseConfig'
import {collection, getFirestore} from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { getAuth } from 'firebase/auth';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Container, Row, Col, Card, CardGroup, Image } from 'react-bootstrap';

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
      <Container className=" text-dark w-75 h-25 mt-5 mb-5"> 
      <Row  >
      <h1 className="text-center mb-3">Restoran List's</h1>
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
            <><Card.Title ><h2 className="text-center mb-3"><u>{doc.data().cafe}</u></h2></Card.Title>
            <h5>Owner : {doc.data().username}</h5>
            <h6>Alamat : {doc.data().address}</h6>
            <h6>Kategori : {doc.data().category}</h6>
            <Card.Text>" {doc.data().description} "</Card.Text></>
          </Card.Body>
        </Card>
        ))}
      </CardGroup>
       ))}
       </>
      </Col>
      </Row>
      </Container>
      <Footer/>
      </div>
  );
}

export default Home