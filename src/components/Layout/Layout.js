import React from 'react';
import classes from './Layout.module.scss';


import Header from './Header/Header';
import Footer from './Footer/Footer';


const layout = (props) => {



    return (
       <>

        <Header/>
            <main className={classes.Main}>
                {props.children}
            </main>
        <Footer/>

       </>
    )
}

export default layout;
