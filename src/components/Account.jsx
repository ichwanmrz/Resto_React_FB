import React, { useEffect } from 'react';
import firebaseApp from '../config/firebaseConfig'
import { getAuth } from 'firebase/auth'
import { useAuthState } from "react-firebase-hooks/auth";
import {collection, getFirestore} from 'firebase/firestore';
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

//   const [profile, setProfile] = useState({
//     username: "",
//     email: "",
//     password:"",
//     imageUrl: "",
//     region: "",
// })

  // const handleFileChange = (event) => {
  //   setFile(event.target.files[0])
  //   setProfile(file)
  //   }

// const fileInput = useRef();

// const selectFile = () => {
//     fileInput.current.click();
// }

  return (
    <div>
        <h1 className='bg-secondary'>My Profile</h1>
        {/* {value && value.docs.map((doc) => ( */}
          
        <ListGroup className='text-start mt-3' 
        // key={doc.id}
        >
            <Image src={user.photoURL} alt="image" className="img-thumbnail w-5 mx-auto mb-3 rounded-circle"/>
{/*         
            <center>
                <div className='text-center bg-warning rounded-pill' style={{width: "10vw", height: "10vw"}}>
                    <div className='texr-center'>
                        {file && file.type === "image/jpeg" && <img className='img-thumbnail border rounded-pill' style={{width: "10vw", height: "10vw"}} 
                        src={
                          URL.createObjectURL(file) || 
                          user.photoURL }
                        />}
                    </div>
                </div>
                <FormControl className='w-25 mt-3' ref={fileInput} type="file" onChange={handleFileChange} />
                <Button variant="outline-dark m-3 bg-secondary" type="button" onClick={selectFile} >Update
                    <FontAwesomeIcon icon={faPen} />
                </Button>
            </center> */}

            <ListGroup.Item variant="dark"><pre>Nama           : {user.displayName || user.email.split('@')[0]}</pre></ListGroup.Item>
            <ListGroup.Item variant="info"><pre>ID             : {user.uid}</pre></ListGroup.Item>
            <ListGroup.Item variant="dark"><pre>Email          : {user.email}</pre></ListGroup.Item>
            <ListGroup.Item variant="info"><pre>No.Telp/HP     : {user.phoneNumber}</pre></ListGroup.Item>
            <ListGroup.Item variant="dark"><pre>Membership     : Basic</pre></ListGroup.Item>
            <ListGroup.Item variant="info"><pre>Reward & Bonus : 100 points</pre></ListGroup.Item>
            <ListGroup.Item variant="dark"><pre>Payment Methode: Paypal</pre></ListGroup.Item>
            <ListGroup.Item variant="info"><button className='btn btn-danger'>Delete Account</button></ListGroup.Item>
        </ListGroup>
           {/* ))} */}
{/* <Update /> */}
    </div>
  )
}

export default Account