import React from "react";
import {Link} from "react-scroll";
import {NavLink} from "react-router-dom";
import './Navigation.scss';

export function Navigation() {
    return (
        <ul className="Menu">
            <li>
                <NavLink className="Menu__item" to='/'>Start</NavLink>
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