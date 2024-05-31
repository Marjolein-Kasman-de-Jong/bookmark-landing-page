// Constants
import extensions from '../../constants/extensions';

// Components
import Article from '../article/Article';
import Card from '../card/Card';

// Styles
import './main-section-extensions.css';

function MainSectionExtensions() {
  return (
    <section className='extensions'>
      <Article
        title='download the extension'
        text='We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.'
      />
      <div className='extensions-container'>
        {
          extensions.map(({ extension, version, image }) => {
            return <Card
              key={extension}
              extension={extension}
              version={version}
              image={image}
            />
          })
        }
      </div>
    </section>
  );
}

export default MainSectionExtensions;