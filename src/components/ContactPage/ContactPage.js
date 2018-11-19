import React from 'react'

const contactPage = (props) => {

    window.scrollTo(0, 0);
    props.title('buikaKRU: contact')

    

    return(
        <div>
            <img src="images/buikakrulogo.svg"/>
            <a href="tel:+48510154459">0048 510 154 459</a><br/>
            <a href="tel:+48506096576">0048 506 096 576</a><br/>
            <a href="mailto:hello@buikakru.com">hello@buikakru.com</a><br/>
            <a href="http://buikakru.com/">buikaKRU.com</a>
            <br/>
            <br/>
            <address>
                buikaKRU<br/>
                aleksandra midor<br/>
                mateusz przybylowski<br/>
                smolna 13/87<br/>
                61-008 poznań polska<br/>
            </address>
            <p>nip 665 278 0323</p>
        </div>
    )
}

export default contactPage;