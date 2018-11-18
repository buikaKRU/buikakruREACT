import React from 'react';
import './Footer.scss';

import logo from '../../../assets/images/buikakruslash.png';


const footer = () => {
    return (
        <footer>
            <div className="footerContainer">
                <span>buikaKRU</span><br/>
                <a href="tel:+48510154459">0048 510 154 459</a><br/>
                <a href="mailto:hello@buikakru.com">hello@buikakru.com</a>
            </div>

            <div className="footerContainer">
                <ul className="social">
                    <li>
                        <a href="https://pinterest.com/buikakru/">\\ pinterest</a>
                    </li>
                </ul>
            </div>

            <img src={logo} alt="buikaKRU slash logo" width="auto" height="80"></img>
        </footer>
    );
}

export default footer;