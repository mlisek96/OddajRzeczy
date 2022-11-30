import {ButtonNextPrevious} from "../ButtonNextPrevious/ButtonNextPrevious";
import {FormSelect} from "../FormSelect/FormSelect";
import './FormTwoForm.scss';

export function FormTwoForm() {
    return (
        <form className="FormTwoForm">
            <div className="FormTwoForm-select">
                <FormSelect
                    name={'bags'}
                    label={'Liczba 60l worków:'}
                    placeholder={'-wybierz-'}
                    value1={'1'}
                    value2={'2'}
                    value3={'3'}
                    value4={'4'}
                    value5={'5'}
                />
            </div>
            <div className="FormTwoForm-btn">
                <ButtonNextPrevious
                    buttonText={'Wstecz'}
                />
                <ButtonNextPrevious
                    buttonText={'Dalej'}
                />
            </div>
        </form>
    )
}