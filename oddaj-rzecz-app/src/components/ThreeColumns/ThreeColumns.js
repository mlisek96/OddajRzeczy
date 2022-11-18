import React from "react";
import './ThreeColumns.scss';

export function ThreeColumns() {
    return (
        <div className="ThreeColumns">
            <ul className="ThreeColumns-list">
                <li className="ThreeColumns-list-item">
                    <h2 className="ThreeColumns-list-item__number">10</h2>
                    <h3 className="ThreeColumns-list-item__header">oddanych worków</h3>
                    <p className="ThreeColumns-list-item__text">
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.
                    </p>
                </li>
                <li className="ThreeColumns-list-item">
                    <h2 className="ThreeColumns-list-item__number">5</h2>
                    <h3 className="ThreeColumns-list-item__header">wspartych organizacji</h3>
                    <p className="ThreeColumns-list-item__text">
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.
                    </p>
                </li>
                <li className="ThreeColumns-list-item">
                    <h2 className="ThreeColumns-list-item__number">7</h2>
                    <h3 className="ThreeColumns-list-item__header">zorganizowanych zbiórek</h3>
                    <p className="ThreeColumns-list-item__text">
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.
                    </p>
                </li>
            </ul>
        </div>
    )
}