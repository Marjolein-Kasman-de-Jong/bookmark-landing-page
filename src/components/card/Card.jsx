// Components
import Button from '../button/Button';

// Images
import dots from '../../assets/bg-dots.svg';

// Styles
import './card.css';

function Card({ extension, version, image }) {
    return (
        <article className='card'>
            <img className='logo' src={image} alt={`${extension} logo`} />
            <header>
                <h3>{`Add to ${extension}`}</h3>
            </header>
            <p>{`Minimum version ${version}`}</p>
            <img className='dots' src={dots} alt='Dotted line' />
            <footer>
                <Button type='regular' buttonText='Add & Install Extension' />
            </footer>
        </article>
    );
}

export default Card;