// import express from 'express';
import morgan from 'morgan';
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Redirect, Route } from 'react-router-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import ContactUs from './ContactUs';
import Header from './Cart';
import Artworks from './Artworks'
import Home from './Home';
import Arts from './arts';
import Forcheck from './ForCheck';
import MyOrders from './MyOrders';
import './Login.css';
import FAQ from './FAQ'
import Profile from './Profile';
import Help from './Help'
import RegisterAdmin from './adminsignup'
import AdminPortal from './adminportal';
import Admin from './adminlogin';
import AdminCards from './adminMain'
import AdminUsers from './adminusers'
import AdminMessages from './adminmessages'
import { Provider } from "react-redux";
import store from "./Store";
import RequestForServices from "./RequestForServices";
import FinalRedux from './FinalRedux'
const path = require('path');
const baseUrl = 'https://unique-fudge-7e4243.netlify.app'
// Serve static assets (including your React app)
// app.use(express.static('public'));

// // All other GET requests not handled before will return the React app
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
// });

console.log(baseUrl)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
            <Route exact path={`${baseUrl}/`} component={Login} />
                <Route exact path={`${baseUrl}/register`} component={Register} />
                <Route path={`${baseUrl}/dashboard`} component={Dashboard} />
                <Route path={`${baseUrl}/home`} component={Home}/>
                <Route path={`${baseUrl}/forcheck`} component={Forcheck}/>
                <Route path={`${baseUrl}/artworks`} component={Artworks} />
                <Route path={`${baseUrl}/arts`} component={Arts} />
                <Route path={`${baseUrl}/contactus`} component={ContactUs} />
                <Route path={`${baseUrl}/cart`} component={Header}/>
                <Route path={`${baseUrl}/myorders`} component={MyOrders}/>
                <Route path={`${baseUrl}/help`} component={Help} />       
                <Route path={`${baseUrl}/Profile`} component={Profile} />
                <Route path={`${baseUrl}/FAQS`} component={FAQ} />
                <Route path={`${baseUrl}/admin`} component={Admin} />
                <Route path={`${baseUrl}/adminregister`} component={RegisterAdmin} />
                <Route path={`${baseUrl}/adminportal`} component={AdminPortal} />
                <Route path={`${baseUrl}/adminmain`} component={AdminCards} />
                <Route path={`${baseUrl}/adminusers`} component={AdminUsers} />
                <Route path={`${baseUrl}/adminmessages`} component={AdminMessages} />
                <Route path={`${baseUrl}/requestforservices`} component={RequestForServices} />
                <Route path={`${baseUrl}/finalredux`} component={FinalRedux} />
                {/* <Route component={NotFound}/> */}
            </Switch>
        </BrowserRouter>,
    </Provider>,
    document.getElementById('root')
);
// import express from 'express';


