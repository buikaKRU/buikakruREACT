import React from 'react';
import logo from '../../assets/images/buikakrulogo.svg';
import './ContactPage.scss';

const contactPage = (props) => {
//// //// ////
////  CONTACT PAGE SUB-PAGE 
////


    window.scrollTo(0, 0);
    props.title('buikaKRU: contact')

    

    return(
        <div className='contactContainer'>
            <img src={logo} alt="logo"/>
            <div className='rightContainer'>
                <p>
                    <a href="tel:+48510154459">0048 510 154 459</a><br/>
                    <a href="tel:+48506096576">0048 506 096 576</a><br/>
                    <a href="mailto:hello@buikakru.com">hello@buikakru.com</a><br/>
                    <a href="http://buikakru.com/">buikaKRU.com</a>
                </p>
                <br/>
                <address>
                    <p>
                        buikaKRU<br/>
                        aleksandra midor<br/>
                        ul. smolna 13/87<br/>
                        61-008 poznań polska<br/>
                    </p>
                </address>
                <p>nip 665 278 0323</p>
            </div>
     
        </div>
    )
}

export default contactPage;