import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/Header";
import Image from 'react-bootstrap/Image';
import cafe1 from "./images/laxbw-prime-1715-hor-wide.webp";
import cafe2 from "./images/maras-restaurant-interior-1.jpg";
import cafe3 from "./images/2021_03_23_Merois_008.12.jpg";
import logo1 from "./images/linkedin_social_media_professional_icon_232022.png";
import logo2 from "./images/wordpress_icon_231959.png" ;
import logo3 from "./images/apple_icon_232008.png";
import { Col, Row, Card, CardGroup, Button } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App ">
    {/* <Header/>
    <div id="content1" className="float-start text-dark text-start">
      <Image src={cafe1} className="float-end w-50 m-5 rounded" />
      <h1 className="m-5 w-50 " style={{fontSize: "350%"}}>
        Digital menu <br/> solutions in the <br/><u>delivery</u> and<br/><u>inside the store</u></h1>
      <p className="m-5 ">
        Have your own delivery channel, free of marketplaces fees. <br/>
        And automate 100% your orders with a solution integrated with the best POS.
      </p>
    </div>
    <div id="content2" className="text-dark  text-start m-5">
      <Row>
        <Col xs={12} className="w-25 mt-5">
          <h4 className="mt-3">Pro your Delivery</h4>
          <a href="#">Digital Menu for Delivery</a>
          <h4 className="mt-5">Into Your Store</h4>
          <a className="text-dark" href="#">Digital Menu in QR Code</a><br/><br/>
          <a className="text-dark" href="#">Digital Menu on Tablet</a><br/><br/>
          <a className="text-dark" href="#">Digital Menu for Self-Service</a><br/><br/>
        </Col>
        <Col xs={12} className="w-25">
          <h2>Digital Menu for Delivery</h2>
          <p>Have your own delivery channel, free of marketplaces fees.</p>
          <ul className="list-group">
            <li className="list-group-item ">
              <input type="checkbox" checked/> 
              Direct order on Whatsapp or Goomer Dashboard</li>
            <li className="list-group-item">
              <input type="checkbox" checked /> 
              Customizable digital menu with your brand</li>
            <li className="list-group-item">
            <input type="checkbox" checked /> 
              Store consumption data and retain customers</li>
            <li className="list-group-item">
            <input type="checkbox" checked /> 
              Your own sales channel, free of marketplaces</li><br/>
          </ul>
          <button className="btn btn-primary">Create Free Menu</button>
        </Col>
        <Col xs={12} className="w-50">
          <Image src={cafe2} className="w-100 rounded me-5"></Image>
        </Col>
      </Row>
    </div>
    <div id="content3" className="m-5">
      <h2 className="text-center text-dark">Everything your business needs to<br/><u>sell more</u></h2>
      <CardGroup className="gap-lg-3 mt-5">
      <Card className="bg-primary">
          <Card.Img variant="top" src={cafe1} className="img-thumbnail w-75 m-auto mt-3" />
          <Card.Body>
            <Card.Title>Need to increase your average ticket? Right away!</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="bg-info">
          <Card.Img variant="top" src={cafe3}  className="img-thumbnail w-75 m-auto mt-3"/>
          <Card.Body>
            <Card.Title>Is reducing costs your challenge? Noted!</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="bg-warning">
          <Card.Img variant="top" src={cafe1}  className="img-thumbnail w-75 m-auto mt-3"/>
          <Card.Body>
            <Card.Title>Want more agility in service? Leaving!</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. 
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="bg-danger">
          <Card.Img variant="top" src={cafe3}  className="img-thumbnail w-75 m-auto mt-3"/>
          <Card.Body>
            <Card.Title>Improve the custoemr experience? It's in the hand!</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. 
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
    <div id="content4" className="text-dark text-center m-5">
      <h2>To all kind bussiness</h2>
      <p>Goomer is ideal for restaurants of all segments</p>
      <div className="d-flex justify-content-center gap-3 text-decoration-none">
          <a href="#" className="bg-primary bg-opacity-10 px-4 py-2 rounded text-decoration-none">
            Food and baverage</a>
          <a href="#" className="bg-primary bg-opacity-10 px-4 py-2 rounded text-decoration-none">
            Bread and Snack</a>
          <a href="#" className="bg-primary bg-opacity-10 px-4 py-2 rounded text-decoration-none">
            Cafe and kuliner </a>
          <a href="#" className="bg-primary bg-opacity-10 px-4 py-2 rounded text-decoration-none">
            Hot and freh drink</a>
            <a href="#" className="bg-primary bg-opacity-10 px-4 py-2 rounded text-decoration-none">
            Hot and freh drink</a>
      </div>
      <br/>
      <div className="d-flex justify-content-center gap-3 text-decoration-none">
          <a href="#" className="bg-primary bg-opacity-10 px-4 py-2 rounded text-decoration-none">
            Food and baverage</a>
          <a href="#" className="bg-primary bg-opacity-10 px-4 py-2 rounded text-decoration-none">
            Bread and Snack</a>
          <a href="#" className="bg-primary bg-opacity-10 px-4 py-2 rounded text-decoration-none">
            Cafe and kuliner </a>
          <a href="#" className="bg-primary bg-opacity-10 px-4 py-2 rounded text-decoration-none">
            Hot and freh drink</a>
            <a href="#" className="bg-primary bg-opacity-10 px-4 py-2 rounded text-decoration-none">
            Hot and freh drink</a>
      </div>
      
      <Carousel className="mt-5 ">
      <Carousel.Item>
        <Image
          className="d-block w-5 mx-auto mb-5"
          src={logo1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-5 mx-auto mb-5"
          src={logo2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-5 mx-auto mb-5"
          src={logo3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    <Footer/> */}
    </div>
  );
}

export default App;
