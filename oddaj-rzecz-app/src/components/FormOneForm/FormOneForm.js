import {FormInputRadio} from "../FormInputRadio/FormInputRadio";
import './FormOneForm.scss';

export function FormOneForm({formState, setFormState, onSubmit}) {
    const clickHandler = (event) => {
        setFormState(prev => {
            return {
                ...prev,
                type: event.target.value
            }
        })
    }

    // const submitHandler = (event) => {
    //     event.preventDefault();
    //     console.log(formState)
    // }

    return (
        <div className="FormOneForm">
            <div className="FormOneForm-inputs">
                <FormInputRadio
                    name={'formOne'}
                    label={'ubrania, które nadają się do ponownego użycia'}
                    value='ubrania, które nadają się do ponownego użycia'
                    onClick={clickHandler}
                />
                <FormInputRadio
                    name={'formOne'}
                    label={'ubrania, do wyrzucenia'}
                    value='ubrania, do wyrzucenia'
                    onClick={clickHandler}
                />
                <FormInputRadio
                    name={'formOne'}
                    label={'zabawki'}
                    value={'zabawki'}
                    onClick={clickHandler}
                />
                <FormInputRadio
                    name={'formOne'}
                    label={'książki'}
                    value={'książki'}
                    onClick={clickHandler}
                />
                <FormInputRadio
                    name={'formOne'}
                    label={'inne'}
                    value={'inne'}
                    onClick={clickHandler}
                />
            </div>
        </div>
    )
}