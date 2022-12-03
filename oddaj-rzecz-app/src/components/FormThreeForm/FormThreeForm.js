import {FormSelect} from "../FormSelect/FormSelect";
import {FormInputCheckbox} from "../FormInputCheckbox/FormInputCheckbox";
import {FormInput} from "../FormInput/FormInput";
import './FormThreeForm.scss';

export function FormThreeForm({formState, setFormState}) {
    const clickHandler = (event) => {
        const {name, value} = event.target
        setFormState(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

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
                    onChange={clickHandler}
                    value={formState.localization}
                />
            </div>
            <div className="FormThreeForm-checkbox">
                <FormInputCheckbox
                    formState={formState}
                    setFormState={setFormState}
                />
            </div>
            <div className="FormThreeForm-input">
                <FormInput
                    type={'text'}
                    name={'localizationSpecific'}
                    label={'Wpisz nazwę konkretnej organizacji (opcjonalnie)'}
                    className={'InputBig'}
                    setFormState={setFormState}
                    value={formState.localizationSpecific}
                    onChange={clickHandler}
                />
            </div>
        </form>
    )
}