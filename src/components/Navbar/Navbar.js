import React, {useState, Fragment} from 'react';
import {Link} from 'react-router-dom';
import { Button } from '../Button/Button'
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const clickHandler = () => {
        setClick(!click);
    }

    const closeMenuOnMobile = () => {
        setClick(false);
    }

    //A function that removes the button and displays it depending on the screen size
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    //Whenever the window resizes, showButton() is invoked
    window.addEventListener('resize', showButton);

    return (
        <Fragment>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo'>
                        by karl
                        <i className='fab fa-typo3' />
                    </Link>
                    <div className="menu-icon" onClick={clickHandler}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
                    {/*If button is true, returns the Button component*/}
                    {button && <Button buttonStyle={'btn--outline'}>Sign Up</Button>}
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;
