// Images
import IntroImage from '../../assets/illustration-hero.svg';

// Styles
import './main-section-intro.css';

function MainSectionIntro() {
  return (
    <section className='section intro'>
      <div className='text-container'>
        tekst
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