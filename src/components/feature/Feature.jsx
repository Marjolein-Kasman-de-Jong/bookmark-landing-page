// Components
import Image from '../image/Image';
import Article from '../article/Article';

// Styles
import './feature.css';

function Feature({ title, text, image }) {
  return (
    <>
      {/* Repetitive code to forcibly rerender the component and trigger the CSS animation when content changes. Ideas for a better solution are much appreciated */}
      {
        title === 'bookmark in one click' &&
        <div className='feature-container'>
          <Image image={image} />
          <Article title={title} text={text} buttonType='regular' buttonText={['More info']} />
        </div>
      }
      {
        title === 'intelligent search' &&
        <div className='feature-container'>
          <Image image={image} />
          <Article title={title} text={text} buttonType='regular' buttonText={['More info']} />
        </div>
      }
      {
        title === 'share your bookmarks' &&
        <div className='feature-container'>
          <Image image={image} />
          <Article title={title} text={text} buttonType='regular' buttonText={['More info']} />
        </div>
      }
    </>
  );
}

export default Feature;