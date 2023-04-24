import { pink } from "@material-ui/core/colors";
import React from "react";
import { Field, reduxForm } from "redux-form";
import Navigationbar from "./Navigationbar";


const RequestForServices = props => {
  const { handleSubmit} = props;
  
  return (
    <>
    <Navigationbar />
    <div className="contact">
         <meta charset="UTF-8"></meta>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
   
    <link rel="icon" type="text/css" href="icon.png"></link>


 <div className="cont2" style={{}}>
    <form onSubmit={handleSubmit} data-testid="simple-form">
      <div className="redux" >
        <h1 style={{fontSize:'30px',position:'relative',top:'20px',marginLeft:'100px'}}>Suggest us the services which you want us to provide</h1>
        <label style={{fontSize:'20px',marginLeft:'150px',marginTop:'30px',color:'white',width:'30%'}}>Email:</label>
        <div>
          <Field style={{fontSize:'18px',marginLeft:'100px',height:'50px'}}
            name="email"
            component="input"
            placeholder="Enter email"
            data-testid="email"
          />
        </div>
      </div>
      <div>
        <label style={{fontSize:'20px',marginLeft:'100px',marginTop:'15px',color:'white'}}>Services You Want:</label>
        <div>
          <textarea rows="4" cols="40" style={{fontSize:'18px',marginLeft:'100px',backgroundColor:'white'}}
            name="message"
            component="input"
            type="text"
            placeholder="Service Requirements"
            data-testid="message"
          ></textarea>
        </div>
      </div>
      <div>
        <button style={{marginTop:'30px',marginLeft:'100px',height:'50px',backgroundColor:'pink',  width:'100px',  border:'none'}}
          data-testid="submitButton"
          type="submit" onClick={()=>alert('Your request is sent!!')}>
          Submit
        </button>
      </div>
    </form>
    </div>
    </div>
    </>
  );
};

export default reduxForm({
  form: "simple"
})(RequestForServices);