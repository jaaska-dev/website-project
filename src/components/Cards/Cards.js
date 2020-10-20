import React from 'react';
import CardItem from '../CardItem/CardItem';

const Cards = () => {
    const desc = 'by karl';

    return(
        <div className="cards">
            <h1>Check out my GitHub!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem heading={desc}/>
                    </ul>
                </div>
            </div>
        </div>
    )
}