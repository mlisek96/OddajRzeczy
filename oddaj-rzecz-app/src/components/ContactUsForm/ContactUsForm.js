import {ContactUsFormInput} from "../ContactUsFormInput/ContactUsFormInput";
import {ContactUsTextarea} from "../ContactUsFormTextarea/ContactUsTextarea";
import {ButtonSubmit} from "../ButtonSubmit/ButtonSubmit";
import './ContactUsForm.scss';

export function ContactUsForm() {
    return (
        <div className="ContactUsForm">
            <div className="ContactUsForm-inputs">
                <ContactUsFormInput
                    type={'text'}
                    name={'name'}
                    label={'Wpisz swoje imię'}
                    placeholder={'Krzysztof'}
                />
                <ContactUsFormInput
                    type={'email'}
                    name={'email'}
                    label={'Wpisz swój email'}
                    placeholder={'abc@xyz.pl'}
                />
            </div>
            <ContactUsTextarea
                name={'message'}
                label={'Wpisz swoją wiadomość'}
                placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
                    ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ' +
                    'ut aliquip ex ea commodo consequat.'}
            />
            <div className="ContactUsForm-button">
                <ButtonSubmit buttonText={'Wyślij'} />
            </div>
        </div>
    )
}