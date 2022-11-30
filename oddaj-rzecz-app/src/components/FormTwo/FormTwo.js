import {FormBar} from "../FormBar/FormBar";
import {FormTwoForm} from "../FormTwoForm/FormTwoForm";
import './FormTwo.scss';

export function FormTwo() {
    return (
        <div className="FormTwo">
            <FormBar
                header={'Ważne!'}
                text={'Wszystkie rzeczy do oddania zapakuj w 60l worki. ' +
                    'Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.'}
            />
            <div className="FormTwo-form">
                <p className="FormTwo-form__page">Krok 2/4</p>
                <h2 className="FormTwo-form__header">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
                <FormTwoForm />
            </div>
        </div>
    )
}