import React from "react";
import {Navigation} from "../Navigation/Navigation";
import {LoginRegister} from "../LoginRegister/LoginRegister";
import './PageHeader.scss'

export function PageHeader() {
    return (
        <header className='PageHeader'>
            <LoginRegister />
            <Navigation />
        </header>
    )
}