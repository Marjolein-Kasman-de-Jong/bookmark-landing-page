// Constants
import faqs from '../../constants/faqs';

// Components
import Article from '../article/Article';
import Faq from '../faq/Faq';

// Styles
import './main-section-faqs.css';

function MainSectionFaqs() {
  return (
    <section className='faqs'>
      <Article
        title='frequently asked questions'
        text='Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.'
      />
      <div className='faqs-container'>
        {
          faqs.map(({ question, answer }) => {
            return <Faq question={question} answer={answer} />
          })
        }
      </div>
    </section>
  );
}

export default MainSectionFaqs;