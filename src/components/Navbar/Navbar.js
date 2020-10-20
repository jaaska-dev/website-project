import React, {useState, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const clickHandler = () => {
        setClick(!click);
    }

    const closeMenuOnMobile = () => {
        setClick(false);
    }

    return (
        <Fragment>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo'>
                        Karl Marten J.
                    </Link>
                    <div className="menu-icon" onClick={clickHandler}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                </div>
                <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMenuOnMobile}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/services' className='nav-links' onClick={closeMenuOnMobile}>
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/products' className='nav-links' onClick={closeMenuOnMobile}>
                            Our Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMenuOnMobile}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </nav>
        </Fragment>
    );
};

export default Navbar;
