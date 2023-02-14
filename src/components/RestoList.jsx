import {Table, Badge, Dropdown, Button, ButtonGroup } from 'react-bootstrap';
import { useState,useEffect } from 'react';

const RestoList = ({loading, data, headers, deleteDoc, updateDoc, navigate, pageSize=10, keyword}) => {

  const [currentPage, setCurrentPage] = useState(0)
  
  const filteredResto = data?.filter(item => keyword !== '' ? new RegExp(keyword, 'g').test(item.data().cafe) : item)

  const maxPage = Math.floor(filteredResto?.length / pageSize)

  const leftIndex = currentPage*pageSize+1

  const rightIndex = (currentPage*pageSize)+pageSize

  const lastIndex = filteredResto?.length

  useEffect(() => {
    setCurrentPage(0)
  }, [keyword])
  

  const OptionsButton = ({doc}) => {
    return (
        <Dropdown onClick={(e) => e.stopPropagation()}>
        <Dropdown.Toggle
            id={"options-button"}
            variant="borderless-dark"
            bsPrefix="no-chevron"
            size="sm"
        >
            ...
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ willChange: "transform" }}>
            <Dropdown.Item onClick={() => updateDoc(doc.ref, {product: !doc.data().product})}>
            <span>{doc.data().product ? 'Stop serving': 'Serve'}</span>
            </Dropdown.Item>
            <Dropdown.Item onClick={() => deleteDoc(doc.ref)}>
            <span>Delete</span>
            </Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    );
  };

  return (
    <>
    <Table hover >
      <thead>
        <tr>
        {headers && headers.map((header, index) => <th key={index}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {(!data || data.length === 0 || data === null) &&
        <tr><td colSpan={5}>{loading ? 'Loading data...' : 'no data found.'}</td></tr>}

        {filteredResto?.slice(currentPage*pageSize, (currentPage*pageSize)+pageSize).map((doc) => (
        <tr key={doc.id} onClick={() => navigate(`/dish/${doc.id}`)}>
          <td>{doc.data().cafe}</td>
          <td>{doc.data().category}</td>
          <td>{doc.data().product}</td>
          <td><Badge bg={(doc.data().product) ? 'primary': 'secondary'}>{(doc.data().product) ? 'In Stock': 'Not Available'}</Badge></td>
          <td style={{textAlign: 'right'}}>
          <OptionsButton doc={doc} />
          </td>
        </tr>
        ))}
      </tbody>
    </Table>
    <div className="d-flex justify-content-end align-items-center gap-3">
      
      <span>
        {leftIndex}
        {lastIndex - (leftIndex) > 0 && ` - ${rightIndex > lastIndex ? lastIndex : rightIndex}`} of {lastIndex}
      </span>
      <ButtonGroup>
        <Button 
          disabled={currentPage === 0}
          onClick={() => setCurrentPage(currentPage-1)} variant="secondary">
          Prev</Button>
        <Button
          disabled={currentPage === maxPage} 
          onClick={() => setCurrentPage(currentPage+1)} variant="secondary">
          Next
        </Button>
      </ButtonGroup>
    </div>
    </>
  )
}

export default RestoList