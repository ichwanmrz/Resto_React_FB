import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

const Account = () => {
  return (
    <div>
        <h1 className='bg-secondary'>My Profile</h1>
        <ListGroup className='text-start mt-5'>
            <ListGroup.Item variant="dark"><pre>Nama           : Admin</pre></ListGroup.Item>
            <ListGroup.Item variant="info"><pre>Domisili       : Jakarta</pre></ListGroup.Item>
            <ListGroup.Item variant="dark"><pre>Email          : admin@app.com</pre></ListGroup.Item>
            <ListGroup.Item variant="info"><pre>No.Telp/HP     : 06467xxxxxx</pre></ListGroup.Item>
            <ListGroup.Item variant="dark"><pre>Membership     : Basic</pre></ListGroup.Item>
            <ListGroup.Item variant="info"><pre>Reward & Bonus : 100 points</pre></ListGroup.Item>
            <ListGroup.Item variant="dark"><pre>Payment Methode: Paypal</pre></ListGroup.Item>
            <ListGroup.Item variant="info"><button className='btn btn-danger'>Delete Account</button></ListGroup.Item>
        </ListGroup>
    </div>
  )
}

export default Account