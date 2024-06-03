// Styles
import './faq.css';

function Faq({ id, question, answer, isOpen, onClick }) {
    return (
        <section className={`faq ${id}`}>
            <div
                className='question'
                onClick={onClick}
            >
                <h3>{question}</h3>
                <div className='arrow-container'>
                    <svg
                        className={
                            isOpen ?
                                'open'
                                :
                                'closed'
                        }
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='12'
                    >
                        <path
                            fill='none'
                            stroke='#5267DF'
                            strokeWidth='3'
                            d='M1 1l8 8 8-8'
                        />
                    </svg>
                </div>
            </div>
            {
                isOpen &&
                <div className='answer'>
                    <p>{answer}</p>
                </div>
            }
        </section>
    );
}

export default Faq;