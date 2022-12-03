import {FormInput} from "../FormInput/FormInput";
import {FormInputTextarea} from "../FormInputTextarea/FormInputTextarea";
import './FormFiveForm.scss';

export function FormFiveForm({formState}) {
    return (
        <div className="FormFiveForm">
            <div className="FormFiveForm-address">
                <h3
                    className="FormFiveForm__header"
                >
                    Adres odbioru:
                </h3>
                <div className="FormFiveForm-address__inputs">
                    <FormInput
                        name={'street'}
                        label={'Ulica'}
                        type={'text'}
                        value={formState.street}
                        className={'InputSummary'}
                        disabled={'disabled'}
                    />
                    <FormInput
                        name={'city'}
                        label={'Miasto'}
                        type={'text'}
                        value={formState.city}
                        className={'InputSummary'}
                        disabled={'disabled'}
                    />
                    <FormInput
                        name={'postCode'}
                        label={'Kod pocztowy'}
                        // type={'?'}
                        value={formState.postCode}
                        className={'InputSummary'}
                        disabled={'disabled'}
                    />
                    <FormInput
                        name={'phone'}
                        label={'Numer telefonu'}
                        type={'tel'}
                        pattern={'[0-9]{3}-[0-9]{3}-[0-9]{3}'}
                        autoCorrect={'on'}
                        value={formState.phone}
                        className={'InputSummary'}
                        disabled={'disabled'}
                    />
                </div>
            </div>
            <div className="FormFiveForm-term">
                <h3
                    className="FormFiveForm__header"
                >
                    Termin odbioru:
                </h3>
                <div className="FormFiveForm-term__inputs">
                    <FormInput
                        name={'date'}
                        label={'Data'}
                        type={'date'}
                        value={formState.date}
                        className={'InputSummary'}
                        disabled={'disabled'}
                    />
                    <FormInput
                        name={'time'}
                        label={'Godzina'}
                        type={'time'}
                        value={formState.time}
                        className={'InputSummary'}
                        disabled={'disabled'}
                    />
                    <FormInputTextarea
                        name={'note'}
                        value={formState.note}
                        disabled={'disabled'}
                        className={'TextareaSummary'}
                    />
                </div>
            </div>
        </div>
    )
}