import {Link} from "react-router-dom";
import './ButtonSubmit.scss';

export function ButtonSubmit({linkTo, buttonText, onClick}) {
    return (
        <div
            className="ButtonSubmit"
            onClick={onClick}
        >
            <Link
                className='ButtonSubmit__link'
                to={linkTo}
            >
                {buttonText}
            </Link>
        </div>

        // <button
        //     type="submit"
        //     className={'ButtonSubmit'}
        //     onClick={onClick}
        // >
        //     {buttonText}
        // </button>
    )
}