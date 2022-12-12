import {FormInput} from "../FormInput/FormInput";
import {FormInputTextarea} from "../FormInputTextarea/FormInputTextarea";
import './FormFourForm.scss';

export function FormFourForm({formState, setFormState}) {
    const handleChange = (event) => {
        const {name, value} = event.target
        setFormState(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <div className="FormFourForm">
            <div className="FormFourForm-address">
                <h3
                    className="FormFourForm__header"
                >
                    Adres odbioru:
                </h3>
                <div className="FormFourForm-address__inputs">
                    <FormInput
                        name={'street'}
                        label={'Ulica'}
                        type={'text'}
                        value={formState.street}
                        className={'InputSmall'}
                        onChange={handleChange}
                    />
                    <FormInput
                        name={'city'}
                        label={'Miasto'}
                        type={'text'}
                        value={formState.city}
                        className={'InputSmall'}
                        onChange={handleChange}
                    />
                    <FormInput
                        name={'postCode'}
                        label={'Kod pocztowy'}
                        // type={'?'}
                        value={formState.postCode}
                        className={'InputSmall'}
                        onChange={handleChange}
                    />
                    <FormInput
                        name={'phone'}
                        label={'Numer telefonu'}
                        type={'tel'}
                        pattern={'[0-9]{3}-[0-9]{3}-[0-9]{3}'}
                        autoCorrect={'on'}
                        value={formState.phone}
                        className={'InputSmall'}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="FormFourForm-term">
                <h3
                    className="FormFourForm__header"
                >
                    Termin odbioru:
                </h3>
                <div className="FormFourForm-term__inputs">
                    <FormInput
                        name={'date'}
                        label={'Data'}
                        type={'date'}
                        value={formState.date}
                        className={'InputSmall'}
                        onChange={handleChange}
                    />
                    <FormInput
                        name={'time'}
                        label={'Godzina'}
                        type={'time'}
                        // step={'1800000'}
                        value={formState.time}
                        className={'InputSmall'}
                        onChange={handleChange}
                    />
                    <FormInputTextarea
                        name={'note'}
                        value={formState.note}
                        className={"InputTextarea"}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )
}