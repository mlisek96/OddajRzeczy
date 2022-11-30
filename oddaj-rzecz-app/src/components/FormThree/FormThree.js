import {FormBar} from "../FormBar/FormBar";
import './FormThree.scss';
import {FormThreeForm} from "../FormThreeForm/FormThreeForm";

export function FormThree() {
    return (
        <div className="FormThree">
            <FormBar
                header={'Ważne!'}
                text={'Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. ' +
                    'Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.'}
            />
            <div className="FormThree-form">
                <p className="FormThree-form__page">Krok 3/4</p>
                <h2 className="FormThree-form__header">Lokalizacja:</h2>
                <FormThreeForm />
            </div>
        </div>

    )
}