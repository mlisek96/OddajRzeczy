import {FormInput} from "../FormInput/FormInput";
import {FormInputTextarea} from "../FormInputTextarea/FormInputTextarea";
import './FormFiveForm.scss';

export function FormFiveForm() {
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
                        value={'Prosta 51'}
                        className={'InputSummary'}
                        disabled={'disabled'}
                    />
                    <FormInput
                        name={'city'}
                        label={'Miasto'}
                        type={'text'}
                        value={'Warszawa'}
                        className={'InputSummary'}
                        disabled={'disabled'}
                    />
                    <FormInput
                        name={'PostCode'}
                        label={'Kod pocztowy'}
                        // type={'?'}
                        value={'90-209'}
                        className={'InputSummary'}
                        disabled={'disabled'}
                    />
                    <FormInput
                        name={'PhoneNumber'}
                        label={'Numer telefonu'}
                        type={'tel'}
                        pattern={'[0-9]{3}-[0-9]{3}-[0-9]{3}'}
                        autoCorrect={'on'}
                        value={'473 839 483'}
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
                        value={'2019-10-17'}
                        className={'InputSummary'}
                        disabled={'disabled'}
                    />
                    <FormInput
                        name={'hour'}
                        label={'Godzina'}
                        type={'time'}
                        value={'17:30'}
                        className={'InputSummary'}
                        disabled={'disabled'}
                    />
                    <FormInputTextarea
                        name={'notes'}
                        value={'notatki'}
                        disabled={'disabled'}
                        className={'TextareaSummary'}
                    />
                </div>
            </div>
        </div>
    )
}