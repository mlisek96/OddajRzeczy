import {FormBar} from "../FormBar/FormBar";
import {FormOneForm} from "../FormOneForm/FormOneForm";
import './FormOne.scss';

export function FormOne() {
    return (
        <div className="FormOne">
            <FormBar
                header={'Ważne!'}
                text={'Uzupełnij szczegóły dotyczące Twoich rzeczy. ' +
                    'Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.'}
            />
            <div className="FormOne-form">
                <p className="FormOne-form__page">Krok 1/4</p>
                <h2 className="FormOne-form__header">Zaznacz co chcesz oddać:</h2>
                <FormOneForm />
            </div>
        </div>
    )
}