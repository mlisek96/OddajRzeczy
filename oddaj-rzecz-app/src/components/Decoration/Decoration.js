import React from "react";
import DecorationImage from '../../assets/Decoration.svg'
import './Decoration.scss'

export function Decoration() {
    return (
        <img className='Decoration' src={DecorationImage} alt='decoration image' />
    )
}