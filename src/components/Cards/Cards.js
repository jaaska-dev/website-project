import React from 'react';
import './Cards.css';
import CardItem from './../CardItem/CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check Out My GitHub!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='/images/pagani.jpg'
                            text='This website is made with React.js by @jaaska-dev'
                            label='Developer'
                            path='/services'
                        />
                        <CardItem
                            src='/images/pagani.jpg'
                            text='This website is made with React.js by @jaaska-dev'
                            label='Developer'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;