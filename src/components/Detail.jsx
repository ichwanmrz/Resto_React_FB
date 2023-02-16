import React from 'react';
import firebaseApp from '../config/firebaseConfig';
import { Link, useParams } from 'react-router-dom';
import { getFirestore, doc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import Header from './Header';
import Footer from './Footer';
// import Update from './Update';
import { Image } from 'react-bootstrap';

const Detail = () =>{
      const { id } = useParams()
      const [snapshot, loading] = useDocument(
        doc(getFirestore(firebaseApp), 'Resto', id),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        } 
      ); 

  return loading ? <p>fetching...</p>  :  (
    <div className='text-dark'>
      <Header/>
      <div className='bg-secondary w-75 p-5 mx-auto mb-3 rounded'>
      <h3 className='text-dark mb-5 text-center'>About <br/> <u><strong>{snapshot.data().cafe}</strong></u></h3>
      <Image src={snapshot.data().image} alt="image" className="img-thumbnail w-75 mx-auto d-block  mb-5"/>
        <ul><pre> 
          <li>Owner       : <h3>Mr. {snapshot.data().username}</h3></li>
          <li>Location    : <b>{snapshot.data().address}</b></li>
          <li>Category    : <b>{snapshot.data().category}</b></li>
          <li>Top Product : <u><b>{snapshot.data().product}</b></u></li>
          <li>Price       : <b>Rp. {snapshot.data().price}</b></li>
          <li>Description : <b>"{snapshot.data().description}"</b></li>
        </pre></ul>
      </div>
        <Link to='/dashboard'className='m-3'>Back to the Resto List</Link>
        <Link to='/price'className='me-3 float-end'>Go to the list menu</Link>
        <Footer/>
    </div>
  )
}

export default Detail