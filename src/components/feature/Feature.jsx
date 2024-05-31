import { useLocation } from 'react-router-dom';

// Components
import Image from '../image/Image';
import Article from '../article/Article';

// Styles
import './feature.css';

function Feature({ title, text, image }) {
  // Get current rendered feature from url
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);

  return (
    <div className='feature-container'>
      <Image image={image}/>
      <Article title={title} text={text} buttonType='regular' buttonText={['More info']} />
    </div>
  );
}

export default Feature;