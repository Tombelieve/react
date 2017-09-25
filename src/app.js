
require("./styles/app.scss")
import $ from "./scripts/wh/jquery.min"



///////////////////////
// var React = require("react")
// var ReactDOM = require('react-dom')

import RootComponent from './scripts/components/RootComponent'

import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'
import IndexComponent from './scripts/components/IndexComponent'
import FenleiComponent from './scripts/components/FenleiComponent'
import CartComponent from './scripts/components/CartComponent'
import MineComponent from './scripts/components/MineComponent'


// {/* <IndexRedirect to="/main"/> */}
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={RootComponent}>
            <IndexRoute component={IndexComponent}/>  
            <Route path="/index" component={IndexComponent}></Route>
            <Route path="/fenlei" component={FenleiComponent}></Route>
            <Route path="/cart" component={CartComponent}></Route>
            <Route path="/mine" component={MineComponent}></Route>
            <Route path="*" component={IndexComponent}></Route>
        </Route>
   </Router>
    
    ,document.getElementById("app"))