// Components
import Article from '../article/Article';

// Images
import IntroImage from '../../assets/illustration-hero.svg';

// Styles
import './main-section-intro.css';

function MainSectionIntro() {
  return (
    <section className='section intro'>
      <div className='intro-text-container'>
        <Article
          title='a simple bookmark manager'
          text='A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.'
          buttonType='regular'
          buttonText={['Get it on Chrome', 'Get it on Firefox']}
        />
      </div>
      <div className='image-container'>
        <div className='image-wrapper'>
          <img src={IntroImage} alt='Abstract computer screen' />
          <div className='background-shape'></div>
        </div>
      </div>
    </section>
  );
}

export default MainSectionIntro;