import {FormTwoForm} from "../FormTwoForm/FormTwoForm";
import './FormTwo.scss';

export function FormTwo() {
    return (
        <div className="FormTwo">

            <div className="FormTwo-form">
                <p className="FormTwo-form__page">Krok 2/4</p>
                <h2 className="FormTwo-form__header">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
                <FormTwoForm />
            </div>
        </div>
    )
}