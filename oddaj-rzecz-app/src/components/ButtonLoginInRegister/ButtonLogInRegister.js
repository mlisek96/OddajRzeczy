import {Link} from "react-router-dom";
import './ButtonLogInRegister.scss';

export function ButtonLogInRegister({buttonText, linkTo, active, style}) {
    return (
        <div className="ButtonLogInRegister" style={style}>
            <Link className='ButtonLogInRegister__link' to={linkTo}>
                {buttonText}
            </Link>
        </div>
    )
}