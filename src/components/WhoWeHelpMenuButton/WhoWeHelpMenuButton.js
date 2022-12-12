import {Link} from "react-router-dom";
import './WhoWeHelpMenuButton.scss';

export function WhoWeHelpMenuButton({linkTo, buttonText, onClick, style}) {
    return (
        <div
            className='WhoWeHelpMenuButton'
            onClick={onClick}
            style={style}
        >
            <Link
                className='WhoWeHelpMenuButton__link'
                to={linkTo}
            >
                {buttonText}
            </Link>
        </div>
    )
}