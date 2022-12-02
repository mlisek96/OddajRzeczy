import {FormThreeForm} from "../FormThreeForm/FormThreeForm";
import './FormThree.scss';

export function FormThree() {
    return (
        <div className="FormThree">

            <div className="FormThree-form">
                <p className="FormThree-form__page">Krok 3/4</p>
                <h2 className="FormThree-form__header">Lokalizacja:</h2>
                <FormThreeForm />
            </div>
        </div>

    )
}