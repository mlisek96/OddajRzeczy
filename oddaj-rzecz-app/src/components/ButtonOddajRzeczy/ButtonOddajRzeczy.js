import React from "react";
import {Link} from "react-router-dom";
import './ButtonOddajRzeczy.scss'

export function ButtonOddajRzeczy() {
    return (
        <div className='ButtonOddajRzeczy'>
            <Link className='ButtonOddajRzeczy__link' to='/logowanie'>
                Oddaj<br/>rzeczy
            </Link>
        </div>
    )
}