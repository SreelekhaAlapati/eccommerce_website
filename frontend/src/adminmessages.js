import React, { useState, useRef,useEffect } from "react";
import {Modal} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import styles from './Contact.module.css'
import AdminNavigation from './AdminNavigation';

import Axios from "axios";
const BASE_URL3=process.env.BASE_URL3 || 'https://crud-service-ecommerce.onrender.com'
export default function AdminMessages(){
  const url = `${BASE_URL3}datacheck`;

  const input  = useRef();
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();

  const initialValues = { name: "", email: "", phonenumber: "" };
  const [studentData, setStudentData] = useState([]);
  var data={
    name:"",
    email:"",
    phonenumber:"",
    message:""
  }
  
  const handleDelete=async(id)=>{
    await Axios.delete(`${BASE_URL3}/datacheck/${id}`)
    .then(res => alert("deleted success"));
    getData();
};

// http://localhost:3000/users/${userId}
 

const getData=()=>{
  fetch(`${BASE_URL3}/datacheck/`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setStudentData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])



const tableRows = studentData.map((data) => {
  return (
    <tr>
      {/* <td>{data.id}</td> */}
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.phonenumber}</td>
      <td>{data.message}</td>
      <td><Button type="Button" onClick={()=>handleDelete(data._id)}> Delete</Button></td>
    </tr>
  );
});

const [name, setName] = useState("");
const [email,setEmail]=useState("");

const [phonenumber,setPhonenumber]=useState("");
const [message,setMessage] =useState("");


 
return(
    <>
  <AdminNavigation />
 
      <br></br>
      <h1>Messages from Users</h1>
      <div className={styles.hell}>
        <br>
      </br>
      
      <br>
      </br>
      <table className={styles.table1}>
        <thead >
          <tr className={styles.tr1}>
            {/* <th className={styles.th1}>Id</th> */}
            <th className={styles.th1}>Name</th>
            <th className={styles.th1}>Email</th>
            <th className={styles.th1}>PhoneNumber</th>
            <th className={styles.th1}>Message</th>
            <th className={styles.th1}>Delete the message</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
   </div>
      </>
  )
}