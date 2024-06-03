import React, { useState } from 'react';

// Constants
import faqs from '../../constants/faqs';

// Components
import Article from '../article/Article';
import Faq from '../faq/Faq';
import Button from '../button/Button';

// Styles
import './main-section-faqs.css';

function MainSectionFaqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='faqs'>
      <Article
        title='frequently asked questions'
        text='Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.'
      />
      <div className='faqs-container'>
        {
          faqs.map(({ id, question, answer }) => {
            return <Faq
              key={id}
              id={id}
              question={question}
              answer={answer}
              isOpen={openIndex === id}
              onClick={() => handleClick(id)}
            />
          })
        }
      </div>
      <Button type='regular' buttonText='More info' />
    </section>
  );
}

export default MainSectionFaqs;