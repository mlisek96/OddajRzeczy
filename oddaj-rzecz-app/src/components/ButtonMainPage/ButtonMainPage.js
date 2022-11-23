import {Link} from "react-router-dom";
import './ButtonMainPage.scss';

export function ButtonMainPage({linkTo, buttonText, onClick, style}) {
    return (
        <div
            className={'ButtonMainPage'}
            onClick={onClick}
            style={style}
        >
            <Link
                className='ButtonMainPage__link'
                to={linkTo}
            >
                {buttonText}
            </Link>
        </div>
    )
}