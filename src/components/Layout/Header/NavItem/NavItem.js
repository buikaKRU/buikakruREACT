import React from 'react'


const navItem = (props) => {
    return (
        <li>
            <a href="/">{props.item}</a>
        </li>
    );
};

export default navItem;