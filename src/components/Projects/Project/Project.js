import React from 'react';
import {NavLink} from 'react-router-dom'

import './Project.scss'

const project = (props) => {

    
    const style1 = {backgroundImage: 'url("'+props.featureImages[1].src+'")'}
    const style2 = {backgroundImage: 'url("'+props.featureImages[0].src+'")'}



    
    
    return (

        <li className="Project">
            <NavLink to={props.title}>
                <div style={style1}>
                
                    <div className="inner" onLoad={console.log('done')} style={style2}>
                    
                    </div>
                </div>
            </NavLink>
        </li>
    )
}

export default project;