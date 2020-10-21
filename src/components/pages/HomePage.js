import React, { Fragment } from 'react';
import Cards from '../Cards/Cards';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer'
import '../../App.css';

const Home = () => {
    return(
        <Fragment>
            <Hero />
            <Cards />
            <Footer />
        </Fragment>
    )
}

export default Home;
