// Styles
import './button.css';

function Button({ type, buttonText, onClick }) {
    return (
        <button
            className={type}
            onClick={onClick}
        >
            {buttonText}
        </button>
    );
}

export default Button;