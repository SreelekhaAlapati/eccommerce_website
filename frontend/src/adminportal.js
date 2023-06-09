import React, { Component, useState,useEffect} from 'react';
import styles from './Cart.module.css'
import Axios from 'axios';
// import AdminNavigation from './AdminNavigation';
// const isLocalhostActive = process.env.PORT === '2000';
// const BASE_URL1 = isLocalhostActive ? 'http://localhost:2000' : 'https://backend-ecommerce-pap2.onrender.com';
import AdminNavigation from './AdminNavigation';
const BASE_URL1=process.env.BASE_URL1 || 'https://backend-ecommerce-pap2.onrender.com'
const BASE_URL2=process.env.BASE_URL2 || 'https://crud-ecommerce.onrender.com'
function AdminPortal(){
   
  const [userData,setuserData]=useState([]);
  const datas=["username","password"]
  var dat=["",""]
  const updateData=()=>{
    setuserData(userData.filter(item => item.is_delete !== false));
  }
  const getData = () => {
    fetch(`${BASE_URL2}`+'/prod', {  
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
        setuserData(myJson);
      });
  }

  useEffect(()=>{
    getData()
    updateData()
  },[])

  return(
    <>
<AdminNavigation />
  <table>
 <td></td>
 <td style={{fontSize:30}}>Product Image</td>
 <td style={{fontSize:30}}>Name</td>
 <td style={{fontSize:30}}>Price</td>
 <td style={{fontSize:30}}>Description</td>
<br></br>
<br>
</br>
    {userData.map((item) => (
      <>
              <tr>
            <br></br>
            <td align="center"><img src={(`${BASE_URL1}/${item.image}`)} width="70" height="70" /></td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.desc}</td>
            <br></br>
            </tr>   
</>     


      ))}
      </table>
            
        </>
        
  );
}

export default AdminPortal