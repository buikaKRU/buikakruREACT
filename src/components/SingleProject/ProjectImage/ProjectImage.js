import React from 'react';
import './ProjectImage.scss';

const projectImage = (props) => {

    
    const img = props.image;
    const imageRatio =  ((img.height - 20) / img.width) * 100;
    const style = {paddingBottom: `${imageRatio}%`}
    
    
    return (
        <div className='projectImage'>
            <div className='imageContainer' style={style}>
                <img src={img.src} alt={img.alt}/> 
            </div>
        </div>
    )
}

export default projectImage;