import {FormInputRadio} from "../FormInputRadio/FormInputRadio";
import {ButtonNextPrevious} from "../ButtonNextPrevious/ButtonNextPrevious";
import './FormOneForm.scss';

export function FormOneForm() {
    return (
        <div className="FormOneForm">
            <div className="FormOneForm-inputs">
                <FormInputRadio
                    name={'formOne'}
                    label={'ubrania, które nadają się do ponownego użycia'}
                    // value={}
                    // onClick={}
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
            <div className="FormOneForm-btn">
                <ButtonNextPrevious
                    buttonText={'Dalej'}
                />
            </div>
        </div>
    )
}