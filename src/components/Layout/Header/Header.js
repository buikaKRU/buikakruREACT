import React from 'react';
import {NavLink} from 'react-router-dom'
import classes from './Header.module.scss';


import logo from '../../../assets/images/buikakruslash.png';



const header = (props) => {
//// //// ////
////  DISPLAYS HEADER AN HEADER NAVBAR 
////



    return(
        <header className={classes.Header}>
            <div>
                <NavLink to="/">
                    <img className={classes.Logo} src={logo} alt="logo"/>
                </NavLink>

                <nav>
                    <ul>
                        <li>
                            <NavLink to="/contact/">contact</NavLink>
                        </li>

                        <li>
                            <NavLink to="/">projects</NavLink>
                        </li>
                        
                    </ul>
                    
                </nav>
            </div>
        </header>
        
    )
}

export default header
