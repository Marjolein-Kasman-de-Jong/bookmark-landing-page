// Components
import Article from '../article/Article';
import Tabs from '../tabs/Tabs';

// Styles
import './main-section-features.css';

function MainSectionFeatures() {
  return (
    <section className='features' id='features'>
      <Article
        title='features'
        text='Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.'
      />
      <div className='features-container'>
        <Tabs />
      </div>
    </section>
  );
}

export default MainSectionFeatures;