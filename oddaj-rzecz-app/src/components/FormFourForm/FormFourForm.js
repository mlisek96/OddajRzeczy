import {FormInput} from "../FormInput/FormInput";
import {FormInputTextarea} from "../FormInputTextarea/FormInputTextarea";
import './FormFourForm.scss';

export function FormFourForm() {
    return (
        <form className="FormFourForm">
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
                        // value={value}
                        className={'InputSmall'}
                    />
                    <FormInput
                        name={'city'}
                        label={'Miasto'}
                        type={'text'}
                        // value={value}
                        className={'InputSmall'}
                    />
                    <FormInput
                        name={'PostCode'}
                        label={'Kod pocztowy'}
                        // type={'?'}
                        // value={value}
                        className={'InputSmall'}
                    />
                    <FormInput
                        name={'PhoneNumber'}
                        label={'Numer telefonu'}
                        type={'tel'}
                        pattern={'[0-9]{3}-[0-9]{3}-[0-9]{3}'}
                        autoCorrect={'on'}
                        // value={value}
                        className={'InputSmall'}
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
                        // value={value}
                        className={'InputSmall'}
                    />
                    <FormInput
                        name={'hour'}
                        label={'Godzina'}
                        type={'time'}
                        // step={'1800000'}
                        // value={value}
                        className={'InputSmall'}
                    />
                    <FormInputTextarea
                        name={'notes'}
                        // value={value}
                    />
                </div>
            </div>
        </form>
    )
}