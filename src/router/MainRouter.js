import React from "react";
import Root from '../components/Root';
import NavBar from '../components/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function MainRouter() {
    return (
        <Router>  
           <NavBar />
           <Switch>
                <Route 
                    path="/" 
                    component={Root}
                />    
            </Switch>
        </Router>
    )
}