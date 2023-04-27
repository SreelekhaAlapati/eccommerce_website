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



const baseUrl = process.env.NODE_ENV === 'production' ? 'https://unique-fudge-7e4243.netlify.app' : 'http://localhost:3000';
console.log(baseUrl)
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/home' component={Home}/>
                <Route path='/forcheck' component={Forcheck}/>
                <Route path='/artworks' component={Artworks} />
                <Route path='/arts' component={Arts} />
                <Route path='/contactus' component={ContactUs} />
                <Route path='/cart' component={Header}/>
                <Route path='/myorders' component={MyOrders}/>
                <Route path='/help' component={Help} />       
                <Route path='/Profile' component={Profile} />
                <Route path='/FAQS' component={FAQ} />
                <Route path='/admin' component={Admin} />
                <Route path='/adminregister' component={RegisterAdmin} />
                <Route path='/adminportal' component={AdminPortal} />
                <Route path='/adminmain' component={AdminCards} />
                <Route path='/adminusers' component={AdminUsers} />
                <Route path='/adminmessages' component={AdminMessages} />
                <Route path='/requestforservices' component={RequestForServices} />
                <Route path='/finalredux' component={FinalRedux} />
                {/* <Route component={NotFound}/> */}
            </Switch>
        </BrowserRouter>,
    </Provider>,
    document.getElementById('root')
);
// import express from 'express';


