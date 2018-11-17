import React from 'react'
import classes from './Layout.scss'


import Header from './Header/Header';
import Footer from './Footer/Footer'


const layout = (props) => {

    return (
       <>

        <Header/>
            <main>
                {props.children}
            </main>
        <Footer/>

       </>
    )
}

export default layout;
