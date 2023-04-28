// import React, { useState,useEffect } from 'react';
// import styles from './Cart1.module.css';
// import Navigationbar from './Navigationbar';
// import Footer from './Footer';
// import { useHistory } from 'react-router-dom';
// const BASE_URL1=process.env.BASE_URL1 || 'https://backend-ecommerce-pap2.onrender.com'
// const BASE_URL4=process.env.BASE_URL4 || 'https://hello-ecommerce.onrender.com'
// function Cart(){
// useEffect(()=>{
//   getData()
//   updateAmount()
// },[])

// var amount=0;
//   const [cartData,setcartData]=useState([]);
//   const getData=()=>{
//     fetch(`${BASE_URL4}/data`
//     ,{
//       headers : { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }
//     }
//     )
//       .then(function(response){
//         console.log(response)
//         return response.json();
//       })
//       .then(function(myJson) {
//         console.log(myJson);
//         setcartData(myJson);
//       });
//   }
//   const updateCart=()=>{
//     amount=0;
//      cartData.map((data)=>{
//       var recordId=data.id
//       fetch(`${BASE_URL4}/data/${recordId}`, {
//   method: 'DELETE'
// })
// .then(response => {
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   console.log('Record deleted successfully');
//   window.location.reload();

//   alert('Payment successful!');
// })
// .catch(error => {
//   console.error('Error deleting record:', error);
// });

//      })
//   }
//   const updateAmount=()=>{
//     amount=0;
//      cartData.map((data)=>{
//       amount+=data.price
//      })
//   }

//     const history = useHistory();
//   let token = localStorage.getItem('token');
//   console.log(token);
// if (token === null) {

//  history.push('/');
//  return null;
// }
// if (token === 'null') {

//  history.push('/');
//  return null;
// }
// else{
//     return(
//          <>
//     <Navigationbar />
//    <br></br>
//     {cartData.map((item) => (
     
//         <div className={styles.cart_box} key={item.id}>
//           <div className={styles.cart_img}>
//           <img src={`${BASE_URL1}/${item.image}`} alt="" />
//             <p>{item.name}</p>
//           </div>

//           <div>
//           <p style={{color:"white"}}>{amount=amount+item.price}</p>
//             <p>{item.price}rs</p>
//           </div>
//         </div>
//       ))}
//       <br></br>
//       <br></br>
//        <div>
//         <div className={styles.totalprice}>
//             <table>
//               <tr>
//                 <td>Subtotal</td>
//                 <td>{amount}rs</td>
//               </tr>
//               <tr>
//                 <td>Tax</td>
//                 <td>5rs</td>
//               </tr>
//               <tr>
//                 <td>Total</td>
//                 <td>{amount+5}rs</td>
//               </tr>
//             </table>
//           </div>
//           <div className={styles.totalprice1}>
//           <button style={{backgroundColor:"#7DE5ED",borderColor:"#7DE5ED"}} className="btn btn-primary" onClick={updateCart}>Pay Now</button>
//           </div>  
//        </div>
//         <Footer />    
//         </>
//     );
// }
// }

// export default Cart;




import React, { useState,useEffect } from 'react';
import styles from './Cart1.module.css';
import Navigationbar from './Navigationbar';
import Footer from './Footer';
import { useHistory } from 'react-router-dom';
import StripeCheckout from "react-stripe-checkout"
// const isLocalhostActive = process.env.PORT === '2000';
// const BASE_URL1 = isLocalhostActive ? 'http://localhost:2000' : 'https://backend-ecommerce-pap2.onrender.com';
const BASE_URL1=process.env.BASE_URL1 || 'https://backend-ecommerce-pap2.onrender.com'
const BASE_URL4=process.env.BASE_URL4 || 'https://hello-ecommerce.onrender.com'
const KEY = "pk_test_51MzzytSJBc3xJAizg7PIA6J8vmdMlu3bBYl4EIcMSCp0Swz0rYimlMO0oHuFKefo3aJsCyI3vHA4UO60D5yDZLlK00zHNoenRE";

function Cart(){
  
//   const history = useHistory();
//   let token = localStorage.getItem('token');
//   console.log(token);
// if (token === null) {
//  // console.log("jojkjhg00");
//  history.push('/');
//  return null;
// }
// if (token === 'null') {
//  // console.log("jojkjhg00");
//  history.push('/');
//  return null;
// }
useEffect(()=>{
  getData()
  updateAmount()
},[])



// else{
  var amount=0;
  const [cartData,setcartData]=useState([]);
  const getData=()=>{
    fetch(`${BASE_URL4}/data`
    ,{
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
        setcartData(myJson);
      });
  }

  const onToken = (token) => {
    setStripeToken(token)
  }

  const [stripeToken, setStripeToken] = useState([])

  const removeOne=(id,price)=>{
    amount=amount-price;

    fetch(`${BASE_URL4}/data/${id}`, {
 method: 'DELETE'
})
.then(response => {
 if (!response.ok) {
   throw new Error('Network response was not ok');
 }
 console.log('Record deleted successfully');
 window.location.reload();

//  alert('Payment successful!');
})
.catch(error => {
 console.error('Error deleting record:', error);
});

  }
  

  const updateCart=()=>{
    amount=0;
     cartData.map((data)=>{
      var recordId=data.id
      fetch(`${BASE_URL4}/data/${recordId}`, {
  method: 'DELETE'
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  console.log('Record deleted successfully');
  window.location.reload();

  alert('Payment successful!');
})
.catch(error => {
  console.error('Error deleting record:', error);
});

     })
  }
  const updateAmount=()=>{
    amount=0;
     cartData.map((data)=>{
      amount+=data.price
     })
  }

    const history = useHistory();
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
    return(
         <>
    <Navigationbar />
   <br></br>
    {cartData.map((item) => (
     
        <div className={styles.cart_box} key={item.id}>
          <div className={styles.cart_img}>
          <img src={`${BASE_URL1}/${item.image}`} alt="" />
            <p>{item.name}</p>
          </div>

          <div>
          <p style={{color:"white"}}>{amount=amount+item.price}</p>
            <p>{item.price}rs</p>
          </div>
          <div>
            <button onClick={() => removeOne(item.id, item.price)}>Delete</button>
          </div>
        </div>
      ))}
      <br></br>
      <br></br>
       <div>
        <div className={styles.totalprice}>
            <table>
              <tr>
                <td>Subtotal</td>
                <td>{amount}rs</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>5rs</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{amount+5}rs</td>
              </tr>
            </table>
          </div>
          <div className={styles.totalprice1}>
          {amount > 0 && <StripeCheckout
              name=""
              image="../favicon.ico"
              billingAddress
              shippingAddress
              description={"Your total is  ₹" + (amount)}
              amount={(amount) * 100}
              token={onToken}
              stripeKey={KEY}
              currency="INR"
            >
              
            <button>Checkout</button>
            </StripeCheckout>}
          </div>  
       </div>
        <Footer />    
        </>
    );
}
}

export default Cart;