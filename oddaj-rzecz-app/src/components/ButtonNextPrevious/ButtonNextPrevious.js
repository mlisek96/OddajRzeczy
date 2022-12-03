import './ButtonNextPrevious.scss';

export function ButtonNextPrevious({type, onClick, disabled, buttonText}) {
    return (
        <button
            className="ButtonNextPrevious"
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {buttonText}
        </button>
    )
}