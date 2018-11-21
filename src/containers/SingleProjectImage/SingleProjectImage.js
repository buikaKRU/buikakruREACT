import React, {Component} from 'react';
import './SingleProjectImage.scss';
import ImageLoader from '../../containers/Project/ImageLoader/ImageLoader'

class singleProjectImage extends Component {
//// //// ////
////  DISPLAYS IMAGE IN SINGLE PROJECT SUB-PAGE 
////


    state = {
        imageStatus: 'loading...',
    }


    imageReady = () => {
        this.setState({
            imageStatus: 'loaded'
        })
    }

    componentWillReceiveProps(){
        this.setState({
            imageStatus: 'loading...',
        })
    }


    render(){
        const img = this.props.image;
        const imageRatio =  ((img.height - 20) / img.width) * 100;
        const style = {paddingBottom: `${imageRatio}%`}
        
        
        return (
            <div className='projectImage'>
                {console.log('this.state.imageStatus = ', this.state.imageStatus)}
                <div className='imageContainer' style={style}>
                    <img 
                        style={{opacity: this.state.imageStatus === 'loaded' ? 1 : 0}} 
                        onLoad={this.imageReady} src={img.src} alt={img.alt}/> 

                    {this.state.imageStatus !== 'loaded' ? <ImageLoader/> : null}     
                </div>
            </div>
        )
    }
    
   
}

export default singleProjectImage;