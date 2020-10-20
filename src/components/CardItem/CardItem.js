import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const CardItem = ({heading}) => {
    return (
        <Fragment>
            <li className="cards__item">
                {/*Image and Description wrapped in Link*/}
                <Link className="cards__item_link">
                <figure className="cards__item_pic-wrap">
                    <img src="" alt="Image" className="cards__item__img"/>
                </figure>
                    <div className="cards__item__info">
                        <h5 className='cards__item__text'></h5>
                    </div>
                </Link>
            </li>
        </Fragment>
    )
};

export default CardItem;