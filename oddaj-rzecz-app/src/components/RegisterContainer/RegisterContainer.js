import {ContactUsFormInput} from "../ContactUsFormInput/ContactUsFormInput";
import {ButtonLogInRegister} from "../ButtonLoginInRegister/ButtonLogInRegister";
import './RegisterContainer.scss';

export function RegisterContainer() {
    return (
        <div className="RegisterContainer">
            <div className="RegisterContainer-form">
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
                <ContactUsFormInput
                    name={'password'}
                    label={'Powtórz hasło'}
                    type={'password'}
                />
            </div>
            <div className="RegisterContainer-bttns">
                <ButtonLogInRegister
                    buttonText={"Zaloguj się"}
                    style={{
                        borderColor: 'transparent'
                    }}
                    linkTo={'/logowanie'}
                />
                <ButtonLogInRegister
                    buttonText={'Załóż konto'}
                />
            </div>
        </div>
    )
}