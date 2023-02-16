import React, { useEffect } from 'react';
import firebaseApp from '../config/firebaseConfig'
import { getAuth } from 'firebase/auth'
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, getFirestore } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { ListGroup, Image } from 'react-bootstrap';

const Account = () => {
  const auth = getAuth(firebaseApp)
  const [user] = useAuthState(auth);
  const [value] = useCollection(
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
        <h1 className='bg-secondary'>My Profile</h1>
        <ListGroup className='text-start mt-3'>
            <Image src={user.photoURL} alt="image" className="img-thumbnail w-5 mx-auto mb-3 rounded-circle"/>
            <ListGroup.Item variant="dark"><pre>Nama           : {user.displayName || user.email.split('@')[0]}</pre></ListGroup.Item>
            {/* <ListGroup.Item variant="info"><pre>ID             : {user.uid}</pre></ListGroup.Item> */}
            <ListGroup.Item variant="dark"><pre>Email          : {user.email}</pre></ListGroup.Item>
            <ListGroup.Item variant="info"><pre>No.Telp/HP     : {user.phoneNumber}</pre></ListGroup.Item>
            <ListGroup.Item variant="dark"><pre>Membership     : Basic</pre></ListGroup.Item>
            <ListGroup.Item variant="info"><pre>Reward & Bonus : 100 points</pre></ListGroup.Item>
            <ListGroup.Item variant="dark"><pre>Payment Methode: Paypal</pre></ListGroup.Item>
            <ListGroup.Item variant="info"><button className='btn btn-danger'>Delete Account</button></ListGroup.Item>
        </ListGroup>
    </div>
  )
}

export default Account