import { useState } from 'react';

// Components
import Button from '../button/Button';

// Styles
import './main-section-contact.css';

function MainSectionContact() {
  const [email, setEmail] = useState('');
  const [error, toggleError] = useState(false);

  function handleInputChange(event) {
    setEmail(event.target.value);
  }

  function checkEmail(event) {
    event.preventDefault();

    if (email.length === 0 || !email.includes('@') || !email.includes('.')) {
      toggleError(true);
    } else {
      toggleError(false);
    }
  }

  return (
    <section className='contact'>
      <header>
        <hgroup>
          <p>35,000+ already joined</p>
          <h2>Stay up-to-date with what we’re doing</h2>
        </hgroup>
      </header>
      <form action='#'>
        <div className={'input-container ' + (error && 'error')}>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email address'
            onChange={handleInputChange}
          />
          {
            error &&
            <p>
              Whoops, make sure it's an email
            </p>
          }
          {
            error &&
            <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
          >
            <g
              fill='none'
              fillRule='evenodd'
            >
              <circle
                cx='10'
                cy='10'
                r='10'
                fill='#FA5959'
              />
              <g
                fill='#FFF'
                transform='translate(9 5)'
              >
                <rect
                  width='2'
                  height='7'
                  rx='1'
                />
                <rect
                  width='2'
                  height='2'
                  y='8'
                  rx='1'
                />
              </g>
            </g>
          </svg>}
        </div>
        <Button
          type='submit'
          buttonText='contact us'
          onClick={checkEmail}
        />
      </form>
    </section>
  );
}

export default MainSectionContact;