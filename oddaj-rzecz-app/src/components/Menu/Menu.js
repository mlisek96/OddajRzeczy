import React from "react";
import {Link} from "react-scroll"
import './Menu.scss'

export function Menu() {
    return (
        <ul className="Menu">
            <li>
                <Link className="Menu__item">Start</Link>
            </li>
            <li>
                <Link className="Menu__item">O co chodzi?</Link>
            </li>
            <li>
                <Link className="Menu__item">O nas</Link>
            </li>
            <li>
                <Link className="Menu__item">Fundacja i organizacje</Link>
            </li>
            <li>
                <Link className="Menu__item">Kontakt</Link>
            </li>
        </ul>
    )
}