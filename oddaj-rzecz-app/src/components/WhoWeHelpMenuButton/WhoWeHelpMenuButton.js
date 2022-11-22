import {useState} from "react";
import {Link} from "react-router-dom";
import './WhoWeHelpMenuButton.scss';

export function WhoWeHelpMenuButton({linkTo, buttonText, onClick}) {
    return (
        <div
            className='WhoWeHelpMenuButton'
            onClick={onClick}
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