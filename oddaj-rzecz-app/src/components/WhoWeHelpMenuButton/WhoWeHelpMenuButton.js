import {Link} from "react-router-dom";
import './WhoWeHelpMenuButton.scss';

export function WhoWeHelpMenuButton({linkTo, buttonText}) {
    return (
        <div className="WhoWeHelpMenuButton">
            <Link className='WhoWeHelpMenuButton__link' to={linkTo}>
                {buttonText}
            </Link>
        </div>
    )
}