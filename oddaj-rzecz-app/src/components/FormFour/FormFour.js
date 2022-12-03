import {FormFourForm} from "../FormFourForm/FormFourForm";
import './FormFour.scss';

export function FormFour({formState, setFormState}) {
    return (
        <div className="FormFour">
            <div className="FormFour-form">
                <p className="FormFour-form__page">Krok 4/4</p>
                <h2 className="FormFour-form__header">Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
                <FormFourForm formState={formState} setFormState={setFormState}/>
            </div>
        </div>
    )
}