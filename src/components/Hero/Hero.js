import React from 'react';
import {Button} from '../Button/Button';
//CSS Imports
import './Hero.css';
import '../../App.css';

const Hero = () => {
    return (
        <div className="hero-container">
            <video src="../../../public/videos/video-2.mp4" autoPlay loop muted />
            <h1>WELCOME!</h1>
            <p>This site was created with React.js</p>
            <div className="hero-btns">
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    TEASER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
};

export default Hero;