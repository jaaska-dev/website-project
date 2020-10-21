import React, { Fragment } from 'react';
import Cards from '../Cards/Cards';
import Hero from '../Hero/Hero';
import '../../App.css';

const Home = () => {
    return(
        <Fragment>
            <Hero />
            <Cards />
        </Fragment>
    )
}

export default Home;
