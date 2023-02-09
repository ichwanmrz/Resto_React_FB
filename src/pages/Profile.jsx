import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Goods from './Goods';
import Price from './Price';
import Header from '../components/Header'
import Account from '../components/Account';

const Profile = () => {


  return (
    <div>
        <Header/>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Row >
        <Col sm={3} className="bg-dark" style={{height: "85vh", width: "25vw"}}>
        <Nav variant="pills" className="flex-column mt-5">
            <Nav.Item>
              <Nav.Link eventKey="first">Account</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Privacy</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Notifications</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Activities</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fiveth">Setting</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sixth">Contact Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="seventh">Log Out</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Account />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Price />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Goods />
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <Price />
            </Tab.Pane>
            <Tab.Pane eventKey="fiveth">
              <Price />
            </Tab.Pane>
            <Tab.Pane eventKey="sixth">
              <Price />
            </Tab.Pane>
            <Tab.Pane eventKey="sevent">
              <Price />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  )
}

export default Profile