import React from 'react';
import './../../App.css';
import {Button} from '../Button/Button';
import {Link} from 'react-router-dom';

const ReachOut = () => {
    return(
    <>
        <h1 className='sign-up'>Contact Me!</h1>
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join my Newsletter!
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any given moment, free of charge.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email"
                               placeholder="Your Email"
                               className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>My GitHub</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Terms of Service</Link>
                        <Link to='/'>My Working Process</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default ReachOut;