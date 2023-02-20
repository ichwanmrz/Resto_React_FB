import React from 'react';
import firebaseApp from '../config/firebaseConfig'
import { getAuth } from 'firebase/auth'
import { useAuthState } from "react-firebase-hooks/auth";
import {  deleteDoc } from 'firebase/firestore';
import { ListGroup, Image, Button } from 'react-bootstrap';
import UpdateProfile from './UpdateProfile';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";

const Account = ({doc}) => {
    const auth = getAuth(firebaseApp)
    const [user] = useAuthState(auth);
    const DeleteHandler = ({ doc }) => {
     
      return (
        window.confirm("Are you sure to delete your account permanetly ?"),
        window.confirm("Please don't try this action :)"),
        window.confirm("Just click Cancel to always together with Us"),
        <Button variant="outline-dark" onClick={() => deleteDoc(doc.ref)}>
          Delete <FontAwesomeIcon icon={faRemove} />
        </Button>
      );
    };

  return (
    <div>
        <h1 className='bg-secondary m-5 text-center'>{user.displayName || user.email.split('@')[0]}</h1>
        <ListGroup className='text-start m-5'>
            <Image src={user.photoURL} alt="image" className="img-thumbnail w-5 mx-auto mb-3 rounded-circle"/>
            <ListGroup.Item variant="dark"><pre>Nama           : {user.displayName || user.email.split('@')[0]}</pre></ListGroup.Item>
            <ListGroup.Item variant="dark"><pre>Email          : {user.email}</pre></ListGroup.Item>
            <ListGroup.Item variant="info"><pre>No.Telp/HP     : {user.phoneNumber}</pre></ListGroup.Item>
            <ListGroup.Item variant="dark"><pre>Membership     : Basic</pre></ListGroup.Item>
            <ListGroup.Item variant="info"><pre>Reward & Bonus : 100 points</pre></ListGroup.Item>
            <ListGroup.Item variant="dark"><pre>Payment Methode: Paypal</pre></ListGroup.Item>
            <ListGroup.Item variant="info" className='d-flex justify-content-between'><UpdateProfile doc={doc} />
            <Button onClick={DeleteHandler} variant="outline-danger">
              Delete Account <FontAwesomeIcon icon={faRemove} />
            </Button></ListGroup.Item>
        </ListGroup>
    </div>
  )
}

export default Account