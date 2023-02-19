import React, { useEffect } from 'react';
import { Button, Form, Table } from "react-bootstrap";
import firebaseApp from '../config/firebaseConfig';
import { collection, getFirestore } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Order = () => {
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

  const SubmitOrder = async () => {
    if( undefined){
      window.confirm("Please, complete all the fields")    
  } else{
      await 
      window.confirm("Your Order is Recorded and please check the notification order in your email !")  
      navigate("/")
    }
  }

  return (
    <div className='text-dark m-3'>
        <h1 className='text-center mb-5'><u>ORDER FORM</u></h1>
        <h3>#Order Products from The Resto : </h3>
        <hr className='color-blue'/> 
        <Form> 
        <pre>
        <ol className='fw-bold'>
        <li>Date        : <input type={"date"}/></li><br/>
        <li>Name        : <input type={"text"}/></li><br/>
        <li>Address     : <input type={"text"}/></li><br/>
        <li>Contact     : <input type={"number"}/></li><br/>
        <li>Email       : <input type={"email"}/></li><br/>
        <li>Pick Up or Delivery : <br/>
        <input type={'checkbox'}/> Pick Up &nbsp;
        <input type={'checkbox'}/> Delivery &nbsp;
        <input type={'checkbox'}/> Take in Self
        </li>
        </ol>
        </pre>
        <hr/> 
        <Table className='w-75 mx-auto'>
        <thead>
        <tr className='table-dark'>
            <th scope="col">No</th>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price (IDR)</th>
            <th scope="col">SubTotal</th>
          </tr>
        </thead>
        {value && value.docs.map((doc,index) => (
        <tbody key={index}>
          <tr  className="table-success">
            <th scope="row"><input type={'checkbox'}/></th>
            <td className="text-start">{doc.data().product}</td>
            <td>{doc.data().category}</td>
            <td>Rp. {doc.data().price}</td>
            <td>Rp. {doc.data().price}</td>
          </tr>
        </tbody>
          ))}
      </Table>
     <div className=' w-75 bg-light mx-auto'> 
      <h4 className=' ms-5'>Total Payment : <p className='float-end me-5 '>Rp. ................</p></h4>
      </div>
        <div className='w-75 bg-light mx-auto mb-5'>
          <h6 className='text-end ms-5 p-1'>Jakarta, </h6>
          <Button type='button' className="btn btn-outline-light mb-4 float-end ms-5 mt-3 " onClick={SubmitOrder}>
            Submit Order
          </Button>
        </div>
      </Form>
     <br/>
      <Footer/>
    </div>
  )
}

export default Order