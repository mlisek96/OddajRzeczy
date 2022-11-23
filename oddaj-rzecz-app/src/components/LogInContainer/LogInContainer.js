import {ContactUsFormInput} from "../ContactUsFormInput/ContactUsFormInput";
import {ButtonLogInRegister} from "../ButtonLoginInRegister/ButtonLogInRegister";
import './LogInContainer.scss';

export function LogInContainer() {
    return (
        <div className="LogInContainer">
            <div className="LogInContainer-form">
                <ContactUsFormInput
                    name={'email'}
                    label={'Email'}
                    type={'email'}
                />
                <ContactUsFormInput
                    name={'password'}
                    label={'Hasło'}
                    type={'password'}
                />
            </div>
            <div className="LogInContainer-bttns">
                <ButtonLogInRegister
                    buttonText={'Załóż konto'}
                    style={{
                        borderColor: 'transparent'
                    }}
                    linkTo={'/rejestracja'}
                />
                <ButtonLogInRegister
                    buttonText={"Zaloguj się"}
                />
            </div>
        </div>
    )
}