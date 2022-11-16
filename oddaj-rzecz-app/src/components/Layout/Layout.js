import React from "react";
import {Outlet} from "react-router-dom";
import {PageHeader} from "../PageHeader/PageHeader";
import {PageFooter} from "../PageFooter/PageFooter";
import './Layout.scss'

export function Layout() {
    return (
        <div className="Layout">
            <PageHeader />
            <main className="Layout__main">
                <Outlet/>
            </main>
            <PageFooter />
        </div>
    )

}