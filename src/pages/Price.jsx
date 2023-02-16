import React, { useEffect } from "react";
import firebaseApp from '../config/firebaseConfig';
import { collection, getFirestore } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Price = () => {
  
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
    <div >
      <Header/>
        <h1 className="m-5 text-dark text-center">Price List :</h1>
      <Table className="table table-dark table-hover w-75 mx-auto mb-5 text-center">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Product</th>
            <th scope="col">Category</th>
            <th scope="col">Price (IDR)</th>
            <th scope="col">Resto</th>
          </tr>
        </thead>
        {value && value.docs.map((doc,index) => (
        <tbody key={index}>
          <tr  className="table-danger">
            <th scope="row">{index+1}</th>
            <td className="text-start">{doc.data().product}</td>
            <td>{doc.data().category}</td>
            <td>Rp. {doc.data().price}</td>
            <td>{doc.data().cafe}</td>
          </tr>
        </tbody>
          ))}
      </Table>
      <Link to='/dashboard'className='m-3'>Back to the Resto List</Link>
      <Link to='/profile'className='me-3 float-end'>Go to order menu</Link>
        <Footer/>
    </div>
  )
}

export default Price

