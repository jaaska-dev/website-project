import React from 'react';
import './../../App.css';
import '../Footer/Footer.css';
import {Button} from '../Button/Button';
import {Link} from 'react-router-dom';

const SignUp = () => {
    return (
        <>
       <h1 className='sign-up'>
           SIGN UP
       </h1>
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
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/' className='social-logo'>
                        by karl <i className="fab fa-redhat"/>
                    </Link>
                </div>
                <small className='website-rights'>@jaaska-dev &copy; 2020</small>
                <div className="social-icons">
                    <Link to='/'
                          target='_blank'
                          aria-label='GitHub'
                          className="social-icon-link github">
                        <i className="fab fa-github"/>
                    </Link>
                    <Link to='/'
                          target='_blank'
                          aria-label='Twitter'
                          className="social-icon-link twitter">
                        <i className="fab fa-twitter"/>
                    </Link>
                    <Link to='/'
                          target='_blank'
                          aria-label='LinkedIn'
                          className="social-icon-link linkedin">
                        <i className="fab fa-linkedin"/>
                    </Link>
                </div>
            </div>
        </section>
    </div>
</>
    );
};

export default SignUp;
