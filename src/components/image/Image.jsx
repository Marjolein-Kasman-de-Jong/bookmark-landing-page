// Styles
import './image.css';

function Image({ image }) {
    return (
        <div className='image-wrapper'>
            <img
                src={image}
                alt='Intro image'
            />
            <div className='background-shape'></div>
        </div>
    );
}

export default Image;