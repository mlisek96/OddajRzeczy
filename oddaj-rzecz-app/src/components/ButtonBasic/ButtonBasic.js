import {Link} from "react-router-dom";
import './ButtonBasic.scss'

export function ButtonBasic({linkTo, buttonText}) {
    return (
        <div className='ButtonBasic'>
            <Link className='ButtonBasic__link' to={linkTo}>
                {buttonText}
            </Link>
        </div>
    )
}