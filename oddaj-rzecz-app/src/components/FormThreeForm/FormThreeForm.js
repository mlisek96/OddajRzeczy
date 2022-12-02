import {FormSelect} from "../FormSelect/FormSelect";
import {FormInputCheckbox} from "../FormInputCheckbox/FormInputCheckbox";
import {FormInput} from "../FormInput/FormInput";
import './FormThreeForm.scss';

export function FormThreeForm() {
    return (
        <form className="FormThreeForm">
            <div className="FormThreeForm-select">
                <FormSelect
                    name={'localization'}
                    placeholder={'-wybierz-'}
                    // value={value}
                    option1={'Poznań'}
                    option2={'Warszawa'}
                    option3={'Kraków'}
                    option4={'Wrocław'}
                    option5={'Katowice'}
                />
            </div>
            <div className="FormThreeForm-checkbox">
                <FormInputCheckbox
                    // value={value}
                />
            </div>
            <div className="FormThreeForm-input">
                <FormInput
                    type={'text'}
                    name={'localization'}
                    // value={value}
                    label={'Wpisz nazwę konkretnej organizacji (opcjonalnie)'}
                    className={'InputBig'}
                />
            </div>
        </form>
    )
}