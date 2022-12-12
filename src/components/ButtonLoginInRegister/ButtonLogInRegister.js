import {Link} from "react-router-dom";
import './ButtonLogInRegister.scss';

export function ButtonLogInRegister({buttonText, linkTo, disabled, style, onClick}) {
    return (
        <div
            className="ButtonLogInRegister"
            style={style}
            onClick={onClick}
            disabled={disabled}
        >
            <Link
                className='ButtonLogInRegister__link'
                to={linkTo}
            >
                {buttonText}
            </Link>
        </div>
    )
}