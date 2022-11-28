import {Link} from "react-router-dom";
import './ButtonNextPrevious.scss';

export function ButtonNextPrevious({onClick, linkTo, buttonText}) {
    return (
        <div
            className="ButtonNextPrevious"
            onClick={onClick}
        >
            <Link
                className='ButtonNextPrevious__link'
                to={linkTo}
            >
                {buttonText}
            </Link>
        </div>
    )
}