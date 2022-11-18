import React from "react";
import {Link} from "react-router-dom";
import './LoginRegister.scss'

export function LoginRegister() {
    return (
        <ul className="Login">
            <li>
                <Link className="Login__item" to='/logowanie'>Zaloguj</Link>
            </li>
            <li>
                <Link className="Login__item" to='/rejestracja'>Załóż konto</Link>
            </li>
        </ul>
    )
}