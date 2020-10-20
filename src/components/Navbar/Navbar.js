import React, {useState, Fragment} from 'react';

const navbar = () => {
    return (
       <Fragment>
           <nav className="navbar">
               <div className="navbar-container">
                <Link to='/' className='navbar-logo'>
                    Karl Marten J.
                </Link>
               </div>
           </nav>
       </Fragment>
    );
};

export default navbar;
