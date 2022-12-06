import './ButtonNextPrevious.scss';

export function ButtonNextPrevious({type, onClick, onSubmit,disabled, buttonText}) {
    return (
        <button
            className="ButtonNextPrevious"
            onClick={onClick}
            onSubmit={onSubmit}
            disabled={disabled}
            type={type}
        >
            {buttonText}
        </button>
    )
}