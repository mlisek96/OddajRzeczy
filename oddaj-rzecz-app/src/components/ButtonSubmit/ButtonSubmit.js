import {Link} from "react-router-dom";
import './ButtonSubmit.scss';

export function ButtonSubmit({linkTo, buttonText}) {
    return (
        <div className="ButtonSubmit">
            <Link className='ButtonSubmit__link' to={linkTo}>
                {buttonText}
            </Link>
        </div>
    )
}