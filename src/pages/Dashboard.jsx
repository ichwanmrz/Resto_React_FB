import React from "react";
import { useEffect, useState } from 'react';
import firebaseApp from '../config/firebaseConfig'
import { collection, getFirestore, deleteDoc } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Create from "../components/Create";
import Update from "../components/Update";
import { Container, Row, Col, Card, CardGroup, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [show, ] = useState(false)
  const [value] = useCollection(
      collection(getFirestore(firebaseApp), 'Resto'),
      {
        snapshotListenOptions: { includeMetadataChanges: true },
      }
    ); 
  
    useEffect(() => {
      console.log(value);
    }, [value])


    const DeleteHandler = ({ doc }) => {
      return (
        <Button variant="outline-dark" onClick={() => deleteDoc(doc.ref)}>
          Delete <FontAwesomeIcon icon={faRemove} />
        </Button>
      );
    };

  return (
      <div>
      <Header/>
      <Container className="d-flex  text-dark w-75 h-25 mt-5 mb-5"> 
      <Row  >
      <div className="d-flex justify-content-start mb-3">
          <Create show={show} />
        </div>
      <h1 className="text-center mb-5">Restoran List's</h1>
      <Col xs={12}> 
      <CardGroup className="gap-lg-3"> {value && value.docs.map((doc) => (
        <Card key={doc.id} 
        style={{ width: '18rem' }}
        className=" mb-2 flex-fill bg-info">
          <Image src={doc.data().image} alt="image" className="img-thumbnail w-75 m-auto mt-3"/>
          <Card.Body >
            <Card.Title ><h2 className="text-center mb-3"><u>{doc.data().cafe}</u></h2></Card.Title>
            <h5>Directur : Mr. {doc.data().username}</h5>
            <h6>Address : {doc.data().address}</h6>
            <h6>Category : {doc.data().category}</h6>
            <h6>Top Product : <u>{doc.data().product}</u></h6>
            <Card.Text>" {doc.data().description} "</Card.Text> 
          </Card.Body>
          <div className="d-flex mx-auto gap-3 m-3">
          <Update item={doc.data()} itemId={doc.id}/>
          <DeleteHandler doc={doc} />
          </div>
        </Card>
        ))}
      </CardGroup>
       {/* ))} */}
       {/* </> */}
      </Col>
      </Row>
      </Container>
     
      <Footer/>
      </div>
  );
}

export default Dashboard