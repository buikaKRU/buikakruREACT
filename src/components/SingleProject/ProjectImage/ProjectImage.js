import React, {Component} from 'react';
import './ProjectImage.scss';

class projectImage extends Component {

    state = {
        imageStatus: 'loading...',
        test: 'blablbblalal',
    }


    imageReady = () => {
   
        this.setState({
            imageStatus: 'loaded',
            test: this.abc
        })
    }


    render(){
        const img = this.props.image;
        const imageRatio =  ((img.height - 20) / img.width) * 100;
        const style = {paddingBottom: `${imageRatio}%`}
        
        
        return (
            <div className='projectImage'>
                <div className='imageContainer' style={style}>
                    <img 
                        style={{opacity: this.state.imageStatus === 'loaded' ? 1 : 0}} 
                        onLoad={this.imageReady} src={img.src} alt={img.alt}/> 

                        
                </div>
            </div>
        )
    }
    
   
}

export default projectImage;