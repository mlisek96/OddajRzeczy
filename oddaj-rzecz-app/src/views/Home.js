import React from "react";
import HomeHeroImage from '../assets/Home-Hero-Image.jpg'
import {Decoration} from "../components/Decoration/Decoration";
import {ButtonOddajRzeczy} from "../components/ButtonOddajRzeczy/ButtonOddajRzeczy";
import {ButtonZorganizujZbiorke} from "../components/ButtonZorganizujZbiórkę/ButtonZorganizujZbiórkę";
import './Home.scss'

export function Home() {
    return (
        <div className='Home'>
            <img className='Home-image' src={HomeHeroImage} alt="Home hero image"/>
            <div className='Home-content'>
                <h1 className='Home-content__text'>Zacznij Pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                <Decoration/>
                <div className='Home-content__buttons'>
                    <ButtonOddajRzeczy/>
                    <ButtonZorganizujZbiorke/>
                </div>
            </div>
        </div>
    )
}