import {Link} from "react-router-dom";
import './WhoWeHelpMenuButton.scss';

export function WhoWeHelpMenuButton({linkTo, buttonText, onClick, active}) {
    return (
        <div
            className={active === 'Foundations' ? `WhoWeHelpMenuButton active` : "WhoWeHelpMenuButton"}
            onClick={onClick}
            // style={{
            //     border: active === 'Foundations' ? "1px solid black" : "1px solid transparent"
            // }}
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