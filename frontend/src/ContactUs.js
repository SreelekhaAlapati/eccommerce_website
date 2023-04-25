import Footer from './Footer';
import { useHistory } from 'react-router-dom';
import React, { useState, useRef,useEffect } from "react";
import {Modal} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import styles from './Contact.module.css'
import Navigationbar from "./Navigationbar";
import axios from "axios";
const BASE_URL3=process.env.BASE_URL3 || 'https://crud-service-ecommerce.onrender.com'
export default function Checkbo() {
  const history = useHistory();

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    phonenumber: '',
    message: '',
  });

  const bg = require('./img/contactus.png');
  useEffect(() => {
    // document.body.style.backgroundImage = `url('${bg}')`;
    document.body.style.backgroundSize = `cover`;
    document.body.style.backgroundRepeat = `no-repeat`;
    document.body.style.backgroundPosition = `center center`;
    document.body.style.backgroundAttachment = `fixed`;
})

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${BASE_URL3}/datacheck`, formData)
    .then(response => console.log(response))
      .catch(error => console.log(error));
  };
//   myClick: function (text) {
//     alert(text);
// }
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  let token = localStorage.getItem('token');
  console.log(token);
if (token === null) {
 // console.log("jojkjhg00");
 history.push('/');
 return null;
}
if (token === 'null') {
 // console.log("jojkjhg00");
 history.push('/');
 return null;
}
else{

  return (
    <>
    {/* <Navigationbar />
    <div className={styles.container}>
      <div className={styles.checkin}>
        <form onSubmit={addToList}>
         <Modal.Body>
          <Form.Group>
    <div className = "container">
      <h1 style = {{marginBottom: "4.5rem"}}>Contact Us </h1>
      <form onSubmit={handleSubmit}>
        <div className = "containerSmall" style = {{backgroundColor: "#fff", width: "600px", height: "470px", paddingTop: "30px"}}>
        <input type="text" name="name" placeholder = "Name" style={{width: "400px",height:"50px"}} onChange={handleChange} required/>
        <br /> <br />
        <input type="email" name="email" placeholder = "Email"  style={{width: "400px",height:"50px"}} onChange={handleChange} required/>
        <br /> <br />
        <input type="phone" name="phonenumber" placeholder = "Phone Number"  style={{width: "400px",height:"50px"}} onChange={handleChange} required/>
        <br /> <br />
        <textarea name="message" placeholder = "Message" style={{width: "400px",height:"100px"}} onChange={handleChange} />
        <br /> <br />
        </Form.Group>
        </Modal.Body>
        <button style={{backgroundColor:"#FFB9B9",borderColor:"#FFB9B9", width: "70px",height:"40px"}} type="submit">Submit </button>
       
       
        
    </form>
    </div>
    <Footer /> */}


    <Navigationbar />
    <div className={styles.container}>
      <div className={styles.checkin}>
        <form onSubmit={handleSubmit}>
         <Modal.Body>
          <Form.Group>
            <h1>Contact Us</h1>
            <Form.Label>We will get in touch with you soon!</Form.Label>
            <br />
            <input type="text" name="name"  placeholder="Name" onChange={handleChange} style={{width: "300px",height:"50px"}} />
            <br></br>
            <br></br>
            <input type="email" name="email"  placeholder="Email"   onChange={handleChange} style={{width: "300px",height:"50px"}}/>
            <br></br>
            <br></br>
            <input type="text" name="phonenumber"  placeholder="Phone Number" onChange={handleChange}  style={{width: "300px",height:"50px"}} required/>
            <br></br>
            <br></br>
            <input type="text" name="message" placeholder="Message" onChange={handleChange} style={{width: "300px",height:"100px"}} required/>
            <br></br>
          </Form.Group>
        </Modal.Body>
        <br></br>
       
        <Button  onClick={()=>{ alert('Record Added'); }} style={{backgroundColor:"#FFB9B9"}} type="sumbit">Add to List</Button>
     
        
      </form>
    </div>
    <div className={styles.requ}>
   < img style={{marginTop:30}}src= {require("./assets/images/contactus.png")} />
   </div>
    </div>
    <Footer />
    </>

  );
}
}