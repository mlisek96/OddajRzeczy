import React from "react";
import {Link} from "react-scroll";
import {NavLink} from "react-router-dom";
import './Navigation.scss';

export function Navigation() {
    return (
        <ul className="Menu">
            <li>
                <NavLink className="Menu__item" to='/oddaj-rzeczy'>Start</NavLink>
            </li>
            <li>
                <Link
                    className="Menu__item"
                    to="SimpleSteps"
                    spy={true}
                    smooth={true}
                    duration={500}
                    delay={250}
                >
                    O co chodzi?
                </Link>
            </li>
            <li>
                <Link
                    className="Menu__item"
                    to="AboutUs"
                    spy={true}
                    smooth={true}
                    duration={500}
                    delay={250}
                >
                    O nas
                </Link>
            </li>
            <li>
                <Link
                    className="Menu__item"
                    to="WhoWeHelp"
                    spy={true}
                    smooth={true}
                    duration={500}
                    delay={250}
                >
                    Fundacja i organizacje
                </Link>
            </li>
            <li>
                <Link
                    className="Menu__item"
                    to="ContactUs"
                    spy={true}
                    smooth={true}
                    duration={500}
                    delay={250}
                    offset={100}
                >
                    Kontakt
                </Link>
            </li>
        </ul>
    )
}