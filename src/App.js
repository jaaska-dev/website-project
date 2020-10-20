import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

const App = () => {
    return (
       <Fragment>
           <Router>
               <Navbar />
               <Switch>
                   <Route path='/' exact />
               </Switch>
           </Router>
       </Fragment>

    );
}

export default App;