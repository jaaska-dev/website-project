import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/HomePage';


const App = () => {
    return (
       <Fragment>
           <Router>
               <Navbar />
               <Switch>
                   <Route path='/' exact component={Home}/>
               </Switch>
           </Router>
       </Fragment>

    );
}

export default App;