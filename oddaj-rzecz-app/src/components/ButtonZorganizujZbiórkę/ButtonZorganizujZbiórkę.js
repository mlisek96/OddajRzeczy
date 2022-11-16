import React from "react";
import {Link} from "react-router-dom";
import './ButtonZorganizujZbiórkę.scss'

export function ButtonZorganizujZbiorke() {
    return (
        <div className='ButtonZorganizujZbiorke'>
            <Link className='ButtonZorganizujZbiorke__link' to='/logowanie'>
                Zorganizuj<br/>zbiórkę
            </Link>
        </div>
    )
}