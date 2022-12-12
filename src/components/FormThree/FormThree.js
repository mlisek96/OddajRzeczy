import {FormThreeForm} from "../FormThreeForm/FormThreeForm";
import './FormThree.scss';

export function FormThree({formState, setFormState}) {
    return (
        <div className="FormThree">

            <div className="FormThree-form">
                <p className="FormThree-form__page">Krok 3/4</p>
                <h2 className="FormThree-form__header">Lokalizacja:</h2>
                <FormThreeForm formState={formState} setFormState={setFormState}/>
            </div>
        </div>

    )
}