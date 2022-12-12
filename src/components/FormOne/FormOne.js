import {FormOneForm} from "../FormOneForm/FormOneForm";
import './FormOne.scss';

export function FormOne({formState, setFormState}) {
    return (
        <div className="FormOne">
            <div className="FormOne-form">
                <p className="FormOne-form__page">Krok 1/4</p>
                <h2 className="FormOne-form__header">Zaznacz co chcesz oddać:</h2>
                <FormOneForm setFormState={setFormState}/>
            </div>
        </div>
    )
}