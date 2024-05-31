// Components
import Article from '../article/Article';
import Image from '../image/Image';

// Images
import introImage from '../../assets/illustration-hero.svg';

// Styles
import './main-section-intro.css';

function MainSectionIntro() {
  return (
    <section className='intro'>
      <Article
        title='a simple bookmark manager'
        text='A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.'
        buttonType='regular'
        buttonText={['Get it on Chrome', 'Get it on Firefox']}
      />
      <Image image={introImage} />
    </section>
  );
}

export default MainSectionIntro;