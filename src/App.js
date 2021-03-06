import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/HomePage';
import ProductPage from './components/pages/ProductPage';
import Services from './components/pages/Services';
import SignUp from './components/pages/Signup'


const App = () => {
    return (
       <Fragment>
           <Router>
               <Navbar />
               <Switch>
                   <Route path='/' exact component={Home}/>
                   <Route path='/products' component={ProductPage} />
                   <Route path='/services' component={Services} />
                   <Route path='/sign-up' component={SignUp} />
               </Switch>
           </Router>
       </Fragment>

    );
}

export default App;