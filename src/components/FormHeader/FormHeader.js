import FormHeaderImage from '../../assets/Form-Hero-Image.jpg'
import {Decoration} from "../Decoration/Decoration";
import {DecorationRectangleArray} from "../DecorationRectangleArray/DecorationRectangleArray";
import './FormHeader.scss';

export function FormHeader() {
    return (
        <div className="FormHeader">
            <img className='FormHeader-image' src={FormHeaderImage} alt="Form Header Image"/>
            <div className="FormHeader-content">
                <h1 className="FormHeader-content__header">Oddaj rzeczy, których już nie chcesz<br/>POTRZEBUJĄCYM</h1>
                <Decoration/>
                <h2 className="FormHeader-content__text">Wystarczą 4 proste kroki</h2>
                <div className="FormHeader-content__steps">
                    <DecorationRectangleArray/>
                </div>
            </div>
        </div>
    )
}