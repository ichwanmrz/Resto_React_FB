import React, {useState} from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import { Modal, Button } from 'react-bootstrap'
import firebaseApp from '../config/firebaseConfig'
import { doc, setDoc, collection, getFirestore } from 'firebase/firestore'

const Create = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const [loading, setLoading] = useState(false)
    const [isUploading] = useState(false)

    const [resto, setResto] = useState({
        username: '',
        cafe: '',
        address: '',
        category:'',
        description: '',
        image: '',
        product:'',
        price: 0
    })

    const createResto = async () => {
        const db= getFirestore(firebaseApp)
        const restoRef= collection(db, 'Resto')
        try {

            if(!resto.cafe || !resto.description){
                window.confirm("Please, complete all the fields")    
            } else{
                setLoading(true)
                await setDoc(doc(restoRef), {...resto})
                window.confirm("Your resto is posted")  
            }

        } catch (err) {
            console.log(err.message)
        }
        setLoading(false)
        handleClose(false)
    }
    

  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
            Create Your Resto
        </Button>
        
        <Modal show={show} className="text-dark ">
            <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title>Create your Resto here :</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className='justify-content-center'>
                    <Form>
                        <Row className='g-3'>
                        <Col md={6}>
                                <Form.Label>Owner</Form.Label>
                                <Form.Control type="text" className='bg-secondary'
                                onKeyDown={(e) => e.key === 'Enter' && createResto() && setResto({...resto})}
                                    onChange={(e) => setResto({ ...resto, username: e.target.value})} value={resto.username} />
                            </Col>

                            <Col md={6}>
                                <Form.Label>Resto Name</Form.Label>
                                <Form.Control type="text" className='bg-secondary'
                                onKeyDown={(e) => e.key === 'Enter' && createResto() && setResto({...resto})}
                                    onChange={(e) => setResto({ ...resto, cafe: e.target.value})} value={resto.cafe} />
                            </Col>

                            <Col md={6}>
                                <Form.Label>Resto Address</Form.Label>
                                <Form.Control type="text" className='bg-secondary'
                                    onKeyDown={(e) => e.key === 'Enter' && createResto() && setResto({...resto})}
                                    onChange={(e) => setResto({ ...resto, address: e.target.value})} value={resto.address} />
                            </Col>

                            <Col md={6}>
                                <Form.Label>Resto Category</Form.Label>
                                <Form.Control type="text" className='bg-secondary'
                                    onKeyDown={(e) => e.key === 'Enter' && createResto() && setResto({...resto})}
                                    onChange={(e) => setResto({ ...resto, category: e.target.value})} value={resto.category} />
                            </Col>

                            <Col md={12}>
                                <Form.Label>Resto Image (Url)</Form.Label>
                                <Form.Control type="text" className='bg-secondary'
                                    onKeyDown={(e) => e.key === 'Enter' && createResto() && setResto({...resto})}
                                    onChange={(e) => setResto({ ...resto, image: e.target.value})} value={resto.image} />
                                </Col>

                            <Col md={6}>
                                <Form.Label>Resto Product</Form.Label>
                                <Form.Control type="text" className='bg-secondary'
                                onKeyDown={(e) => e.key === 'Enter' && createResto() && setResto({...resto})}
                                    onChange={(e) => setResto({ ...resto, product: e.target.value})} value={resto.product} />
                            </Col>

                            <Col md={6}>
                                <Form.Label>Product Price</Form.Label>
                                <Form.Control type="number" className='bg-secondary'
                                onKeyDown={(e) => e.key === 'Enter' && createResto() && setResto({...resto})}
                                    onChange={(e) => setResto({ ...resto, price: e.target.value})} value={resto.price} />
                            </Col>

                            <Col md={12}>
                                <Form.Label>Resto Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    className='bg-secondary'
                                    style={{ height: '100px' }}
                                    onKeyDown={(e) => e.key === 'Enter' && createResto() && setResto({...resto})}
                                    onChange={(e) => setResto({ ...resto, description: e.target.value})} value={resto.description} />
                            </Col>
                        </Row>
                    </Form>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" 
                    disabled={loading || isUploading} 
                    type= "button" animation="grow" 
                    onClick={() => {createResto() && setResto({...resto})}}>
                  {isUploading ? "Uploading..." : "Post"}
                </Button>
            </Modal.Footer>
        </Modal>

    </div>
  )
}

export default Create