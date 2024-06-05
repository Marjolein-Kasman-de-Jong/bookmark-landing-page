// Styles
import './image.css';

function Image({ image }) {
    return (
        <div className='image-wrapper'>
            <div className='image-container'>
                <img
                    src={image}
                    alt='Intro image'
                />
            </div>
            <div className='background-shape'></div>
        </div>
    );
}

export default Image;