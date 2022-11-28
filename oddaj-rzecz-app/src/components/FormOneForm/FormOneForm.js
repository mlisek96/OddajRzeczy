import {FormInputRadio} from "../FormInputRadio/FormInputRadio";
import {ButtonNextPrevious} from "../ButtonNextPrevious/ButtonNextPrevious";

export function FormOneForm() {
    return (
        <div className="FormOnForm">
            <div className="FormOnForm-inputs">
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
            <div className="FormOnForm-btn">
                <ButtonNextPrevious
                    buttonText={'Dalej'}
                />
            </div>
        </div>
    )
}