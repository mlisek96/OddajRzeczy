import {FormInputRadio} from "../FormInputRadio/FormInputRadio";
import {ButtonNextPrevious} from "../ButtonNextPrevious/ButtonNextPrevious";
import './FormOneForm.scss';

export function FormOneForm({setFormState}) {
    const clickHandler = (e) => {
        setFormState(prev => {
            return {
                ...prev,
                typeOfHelp: e.target.value
            }
        })
    }
    return (
        <form className="FormOneForm">
            <div className="FormOneForm-inputs">
                <FormInputRadio
                    name={'formOne'}
                    label={'ubrania, które nadają się do ponownego użycia'}
                    value="ubrania"
                    onClick={clickHandler}
                />
                <FormInputRadio
                    name={'formOne'}
                    label={'ubrania, do wyrzucenia'}
                    // value={}
                    // onClick={}
                />
                <FormInputRadio
                    name={'formOne'}
                    label={'zabawki'}
                    // value={}
                    // onClick={}
                />
                <FormInputRadio
                    name={'formOne'}
                    label={'książki'}
                    // value={}
                    // onClick={}
                />
                <FormInputRadio
                    name={'formOne'}
                    label={'inne'}
                    // value={}
                    // onClick={}
                />
            </div>
        </form>
    )
}