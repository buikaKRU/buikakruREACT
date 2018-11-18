import React from 'react';


const footer = () => {
    return (
        <footer>
            <div className="footerContainer">
                <span>buikaKRU</span><br/>
                <a href="tel:+48510154459">0048 510 154 459</a><br/>
                <a href="mailto:hello@buikakru.com">hello@buikakru.com</a>
            </div>

            <div className="footerContainer">
                <ul id="socialNet">
                    <li>
                        <a href="https://pinterest.com/buikakru/">\\ pinterest</a>
                    </li>
                </ul>
            </div>

            <img src="images/buikakruslash.png" alt="buikaKRU slash logo" width="auto" height="80"></img>
        </footer>
    );
}

export default footer;