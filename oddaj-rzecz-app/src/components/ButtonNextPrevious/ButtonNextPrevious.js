import './ButtonNextPrevious.scss';

export function ButtonNextPrevious({onClick, disabled, buttonText}) {
    return (
        <button
            className="ButtonNextPrevious"
            onClick={onClick}
            disabled={disabled}
        >
            {buttonText}
        </button>
    )
}