import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Goods from './pages/Goods';
import Price from './pages/Price';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Auth from './components/Auth';
import Home from './pages/Home';
import Detail from './components/Detail';
import Create from './components/Create';
import Order from './components/Order';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App/>}/> */}
      <Route path="/" element={<Home/>}/>
      <Route element={<Auth />}>
      <Route path="/profile" element={<Profile/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/goods" element={<Goods/>} />
      <Route path="/price" element={<Price/>} />
      <Route path="/create" element={<Create/>} />
      <Route path="/detail/:id" element={<Detail/>} />
      <Route path="/order/" element={<Order/>} />
      </Route>
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
