import {ButtonLogInRegisterSmall} from "../ButtonLogInRegisterSmall/ButtonLogInRegisterSmall";
import './LoginRegister.scss'

export function LoginRegister() {
    return (
        <ul className="Login">
            <ButtonLogInRegisterSmall
                buttonText={'Zaloguj'}
                linkTo={'/logowanie'}
            />
            <ButtonLogInRegisterSmall
                buttonText={'Załóż konto'}
                linkTo={'/rejestracja'}
                style={{
                    borderColor: "#FAD648",
                }}
            />
        </ul>
    )
}