import './ButtonNextPrevious.scss';

export function ButtonNextPrevious({type, onClick, disabled, buttonText}) {

    const clickHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (typeof  onClick === "function") {
            onClick();
        }
    }

    return (
        <button
            className="ButtonNextPrevious"
            onClick={clickHandler}
            disabled={disabled}
            type={type}
        >
            {buttonText}
        </button>
    )
}