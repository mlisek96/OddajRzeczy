import {Link} from "react-router-dom";
import './ButtonPage.scss';

export function ButtonPage({linkTo, buttonNumber}) {
    return (
        <div className="ButtonPage">
            <Link className='ButtonPage__link' to={linkTo}>
                {buttonNumber}
            </Link>
        </div>
    )
}