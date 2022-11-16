import React from "react";
import {Menu} from "../Menu/Menu";
import {Login} from "../Login/Login";
import './PageHeader.scss'

export function PageHeader() {
    return (
        <header className='PageHeader'>
            <Login />
            <Menu />
        </header>
    )
}