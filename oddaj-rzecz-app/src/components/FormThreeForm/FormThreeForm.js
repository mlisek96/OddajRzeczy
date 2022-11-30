import {ButtonNextPrevious} from "../ButtonNextPrevious/ButtonNextPrevious";
import {FormSelect} from "../FormSelect/FormSelect";
import {FormInputCheckbox} from "../FormInputCheckbox/FormInputCheckbox";

export function FormThreeForm() {
    return (
        <form className="FormThreeForm">
            <div className="FormThreeForm-select">
                <FormSelect
                    name={'localization'}
                    placeholder={'-wybierz-'}
                    value1={'Poznań'}
                    value2={'Warszawa'}
                    value3={'Kraków'}
                    value4={'Wrocław'}
                    value5={'Katowice'}
                />
            </div>
            <div className="FormThreeForm-checkbox">
                <FormInputCheckbox />
            </div>
            <div className="FormThreeForm-input">

            </div>
            <div className="FormTwoThree-btn">
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