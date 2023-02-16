import React from 'react';
import firebaseApp from '../config/firebaseConfig';
import { useParams } from 'react-router-dom';
import { getFirestore, doc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import Header from './Header';
import Footer from './Footer';

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
        <h3 className='text-dark'>Detail of {snapshot.data().cafe} :</h3>
        <ul>
            <li>Owner : {snapshot.data().username}</li>
            <li>Address : {snapshot.data().address}</li>
            <li>Category : {snapshot.data().category}</li>
            <li>Top Product : {snapshot.data().product}</li>
            <li>Description: "{snapshot.data().description}"</li>
        </ul>
        <Footer/>
    </div>
  )
}

export default Detail