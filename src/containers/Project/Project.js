import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

import './Project.scss';
import ImageLoader from './ImageLoader/ImageLoader'

class project extends Component {


state = {
    imagesLoaded: 0,
};

imageLoaded = ()=>{
        
    let imagesCount = this.state.imagesLoaded;
    imagesCount ++; 
    this.setState({
        imagesLoaded: imagesCount
    })
}

imageOpacity = () => {
    return this.state.imagesLoaded < 2 ? 0 : 1;
}
    
render(){

    const imageloader = this.state.imagesLoaded < 2 ? <ImageLoader/> : null;
    
    return (

        <li className="Project">
            <NavLink to={this.props.title}>


                <div className='outer'>
                    <img 
                        src={this.props.featureImages[1].src}
                        onLoad={this.imageLoaded}
                        style={{opacity: this.imageOpacity()}}
                        alt={this.props.title}
                    />
                    <img 
                        className='imageToHide' 
                        src={this.props.featureImages[0].src}
                        onLoad={this.imageLoaded}
                        style={{opacity: this.imageOpacity()}}
                        alt={this.props.title}
                    />
                    
                </div>

                

                {imageloader}

            </NavLink>
        </li>
    )
  }
}

export default project;