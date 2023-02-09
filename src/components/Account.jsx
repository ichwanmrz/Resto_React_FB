import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

const Account = () => {
  return (
    <div>
        <h1>My Profile</h1>
        <ListGroup className='text-start mt-5'>
            <pre> 
            <ListGroup.Item variant="primary">Nama          :</ListGroup.Item>
            <ListGroup.Item variant="secondary">Alamat      :</ListGroup.Item>
            <ListGroup.Item variant="success">Tanggal Lahir :</ListGroup.Item>
            <ListGroup.Item variant="danger">No.Telp/HP     :</ListGroup.Item>
            <ListGroup.Item variant="warning">Membership    :</ListGroup.Item>
            <ListGroup.Item variant="info">Reward & Bonus   :</ListGroup.Item>
            <ListGroup.Item variant="light">Payment Methode :</ListGroup.Item>
            <ListGroup.Item variant="dark">Delete Account   :</ListGroup.Item>
            </pre>
        </ListGroup>
    </div>
  )
}

export default Account