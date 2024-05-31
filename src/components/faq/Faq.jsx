// Styles
import './faq.css';

function Faq({ question, answer }) {
    return (
        <section class='faq'>
            <div class='question'>
                <h3>{question}</h3>
                <p>X</p>
                {/* <img src='' alt='' /> */}
            </div>
            <div class='answer'>
                <p>{answer}</p>
            </div>
        </section>
    );
}

export default Faq;