import React from 'react';
import './Loader.scss';

const loader = (props) => {


    let slashes = '///'

   
    const visibility = () =>{
        if (props.opacity === 1){
            return 100;
        } else {
           
            return -1;
        }
    }
    const style = {
        opacity: props.opacity,
        zIndex: visibility()
    }


    return (
    <div className="loader" style={style}>
        <div className="slashes">
            <p>
                <span className="span1">/</span>
                <span className="span2">/</span>
                <span className="span3">/</span>
            </p>
        </div>
    </div>
    )
}

export default loader;