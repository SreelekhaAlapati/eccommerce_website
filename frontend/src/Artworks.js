import React, { Component, useState,useEffect} from 'react'
import "./Tab.css";
// import Arts from "./arts";
import Footer from './Footer'
import Navigationbar from './Navigationbar';
import Axios from 'axios';
const BASE_URL1 = process.env.BASE_URL1 || 'https://backend-ecommerce-pap2.onrender.com'

const Artworks = () => {
    const [sure,setSure] =useState([]);
  const [userData,setuserData]=useState([]);
   const url="http://localhost:3006/data";
    const [items, setItems] = useState(userData);
    //  const[cart,setCart] =useState();
    
    const filterItem = (categItem) => {
        const updatedItems = sure.filter((curElem) => {
            return curElem.name === categItem;
        });
        setuserData(updatedItems);
        console.log(updatedItems)
    }
    
    const handleCart=(id)=>{
        const cartItems = sure.filter((curElem) => {
            console.log(curElem._id);
            console.log("  ");
            console.log(id);
            console.log("                               ");
            return curElem._id === id;
        });
        cartItems.map((data)=>{
            const response = Axios.post(url,data,{headers:{"Content-Type" : "application/json"}});
        })
    }

    const updateData=()=>{
        // console.log("it enetered")
        setuserData(sure.filter(item => item.is_delete === true));
    }

    const getData=()=>{
        fetch('http://localhost:8080/allproducts'
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
            setuserData(myJson);
            setSure(myJson);
          });
      }
    
      useEffect(()=>{
        getData()
        updateData()
      },[])

    return (
        <>
   <Navigationbar />

   <h1 className="mt-5 text-center main-heading">Order Your Favourite ArtWork</h1>
   <hr />
            
            <div className="Arts-tabs container">
                <div className="Arts-tab d-flex justify-content-around">
                    <button style={{backgroundColor:"#7DE5ED",borderColor:"#7DE5ED"}} className="btn btn-primary" onClick={() => filterItem('paintings')}>Paintings</button>
                    <button style={{backgroundColor:"#7DE5ED",borderColor:"#7DE5ED"}} className="btn btn-primary" onClick={() => filterItem('sketching')}>Sketching</button>
                    <button style={{backgroundColor:"#7DE5ED",borderColor:"#7DE5ED"}} className="btn btn-primary" onClick={() => filterItem('hooparts')}>HoopArts</button>
                    <button style={{backgroundColor:"#7DE5ED",borderColor:"#7DE5ED"}} className="btn btn-primary" onClick={() => filterItem('others')}>Others</button>
                    <button style={{backgroundColor:"#7DE5ED",borderColor:"#7DE5ED"}} className="btn btn-primary" onClick={() => setuserData(sure)}>All</button>
                </div>
            </div>

            {/* my main items section  */}
            <div className="Arts-items container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            {
                                userData.map((elem) => {
                                    const {_id , name, image, description, price } = elem ;
                                    return (
                                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                                            <div className="row Item-inside">
                                                {/* for images */}
                                                <div className="col-12 col-md-12 col-lg-4 img-div">
                                                    <img src={`{BASE_URL1}/${elem.image}`} alt={name} className="img-fluid"/>
                                                   
                                                </div>

                                                {/* Arts items description */}
                                                <div className="col-12 col-md-12 col-lg-8">
                                                    <div className="main-title pt-4 pb-3">
                                                        <h1>{name}</h1>
                                                        <p>{description }</p>
                                                    </div>
                                                    <div className="Arts-price-book">
                                                        <div className="price-book-divide d-flex justify-content-between ">
                                                            <h2>Price : {price}</h2>
                                                            <a href="#">
                                                                <button style={{backgroundColor:"#FFB9B9",borderColor:"#FFB9B9"}} className="btn btn-primary" onClick={()=>handleCart(elem._id)}>Order Now</button>
                                                            </a>
                                                        </div>
                                                        <p>*Prices may vary</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }  
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
        </>
    )
}

export default Artworks