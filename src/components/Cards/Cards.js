import React from 'react';
import './Cards.css';
import CardItem from './../CardItem/CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check Out My Work!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='/images/koenigsegg.jpg'
                            text='This site was made by @jaaska-dev'
                            label='Coming Soon'
                            path='/services'
                        />
                        <CardItem
                            src='/images/pagani3.jpeg'
                            text='This site was made by @jaaska-dev'
                            label='Coming Soon'
                            path='/services'
                        />

                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='/images/pagani1.jpg'
                            text='This site was made by @jaaska-dev'
                            label='Coming Soon'
                            path='/services'
                        />
                        <CardItem
                            src='/images/pagani.jpg'
                            text='This site was made by @jaaska-dev'
                            label='Coming Soon'
                            path='/services'
                        />
                        <CardItem
                            src='/images/pagani2.jpeg'
                            text='This site was made by @jaaska-dev'
                            label='Coming Soon'
                            path='/services'
                        />

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;