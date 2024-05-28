// Styles
import './button.css';

function Button({ type, buttonText }) {
    return (
        <button className={type}>
            {buttonText}
        </button>
    );
}

export default Button;