import React from 'react';
import {NavLink} from 'react-router-dom'
import classes from './Header.module.scss';


import logo from '../../../assets/images/buikakruslash.png'



const header = (props) => {
    return(
        <header className={classes.Header}>
            
            <img className={classes.Logo} src={logo}/>

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
        </header>
        
    )
}

export default header
