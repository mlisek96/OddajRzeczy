import React from "react";
import {Link} from "react-router-dom";
import './PageFooter.scss'

export function PageFooter() {
    return (
        <footer className='PageFooter'>
            <p className="PageFooter__text">Copyright by Coders Lab</p>
            <ul className="PageFooter-icons">
                <li>
                    <Link className="PageFooter-icons__item PageFooter-icons__facebook">
                        {/*<img src="../../assets/Instagram.svg" alt="Instagram Icon"/>*/}
                    </Link>
                </li>
                <li>
                    <Link className="PageFooter-icons__item PageFooter-icons__instagram">
                        
                    </Link>
                </li>
            </ul>
        </footer>
    )
}