// Components
import Article from '../article/Article';

// Styles
import './feature.css';

function Feature({ title, text, image }) {
  return (
    <>
    {title}
      {/* <div className='feature-container'>
        <div className='image-container'>
          <div className='image-wrapper'>
            <img src={image} alt='Feature illustration' />
            <div className='background-shape'></div>
          </div>
        </div>
        <div className='feature text-container'>
          <Article title={title} text={text} />
        </div>
      </div> */}
    </>
  );
}

export default Feature;