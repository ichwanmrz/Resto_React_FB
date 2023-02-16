import React from "react";
import { useEffect, useState } from 'react';
import firebaseApp from '../config/firebaseConfig'
import { collection, getFirestore, deleteDoc } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Detail from "../components/Detail";
import Create from "../components/Create";
import Update from "../components/Update";
import { Container, Row, Col, Card, CardGroup, Image, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove, faSearchPlus } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [show, ] = useState(false)
  const navigate = useNavigate();
  const [value] = useCollection(
      collection(getFirestore(firebaseApp), 'Resto'),
      {
        snapshotListenOptions: { includeMetadataChanges: true },
      }
    ); 
  
    useEffect(() => {
      console.log(value);
    }, [value])

    // const DeleteHandler = ({ doc }) => {
    //   return (
    //     <Button variant="outline-dark" onClick={() => deleteDoc(doc.ref)}>
    //       Delete <FontAwesomeIcon icon={faRemove} />
    //     </Button>
    //   );
    // };

    const DetailHandler = ({ doc }) => {
      return (
        <Button onClick={() => navigate(`/detail/${doc.id}`)} variant="outline-dark">
         View Detail <FontAwesomeIcon icon={faSearchPlus} />
        </Button>
      );
    };

  //Page


  return (
      <div>
      <Header/>
      <Container className="d-flex  text-dark w-75 h-25 mt-5 mb-5"> 
      <Row  >
      <div className="d-flex justify-content-center mb-5">
          <Create show={show} />
        </div>
      <h1 className="bg-success text-center mb-5">Resto Lists</h1>
      <Col xs={12}> 
      <CardGroup className="gap-lg-3"> {value && value.docs.map((doc) => (
        <Card key={doc.id} 
        style={{ width: '18rem' }}
        className=" mb-2 flex-fill bg-info">
          <Link to={`/detail/${doc.id}`}>
            <Image src={doc.data().image} alt="image" className="img-thumbnail w-75 m-auto mt-3 ms-5"
            data-bs-toggle="tooltip" title="click for more detail"/>
          </Link>
          <Card.Body className="text-center">
            <Card.Title>
            <Link to={`/detail/${doc.id}`}>
              <h2 className="mb-3" onClick={() => navigate(`/detail/${doc.id}`)}><u>{doc.data().cafe}</u></h2>
              </Link>
            </Card.Title>
            <h6>Category : {doc.data().category}</h6>
            <h6>Top Product : <u>{doc.data().product}</u></h6>
            <Card.Text>" {doc.data().description} "</Card.Text> 
          </Card.Body>
          <div className="d-flex mx-auto gap-3 m-3">
          <DetailHandler doc={doc}/>
          {/* <Update item={doc.data()} itemId={doc.id}/>
          <DeleteHandler doc={doc} /> */}
          </div>
        </Card>
        ))}
      </CardGroup>
      </Col>
      </Row>
      </Container>
     
      <Footer/>
      </div>
  );
}

export default Dashboard