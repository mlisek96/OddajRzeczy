import {Link} from "react-router-dom";
import './ButtonLogInRegisterSmall.scss';

export function ButtonLogInRegisterSmall({buttonText, linkTo, onClick, active, style}) {
    return (
        <div className="ButtonLogInRegisterSmall" style={style} onClick={onClick}>
            <Link className='ButtonLogInRegisterSmall__link' to={linkTo}>
                {buttonText}
            </Link>
        </div>
    )
}