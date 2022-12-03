import {useState, useEffect} from "react";
import {ButtonLogInRegisterSmall} from "../ButtonLogInRegisterSmall/ButtonLogInRegisterSmall";
import './LoginRegister.scss'

export function LoginRegister() {
    const [login, setLogin] = useState(true)

    // useEffect(() => {
    //     tutaj będziemy sprawdzać fetchem czy użytkownik jest zalogowany
    //     później jeżeli tak setLogin(true)
    // })

    const bttnChange = () => {
        switch (login) {
            case true:
                return <>
                    <ButtonLogInRegisterSmall
                        buttonText={'Oddaj rzeczy'}
                        linkTo={'/oddaj-rzeczy'}
                        style={{
                            borderColor: "#FAD648",
                        }}
                    />
                    <ButtonLogInRegisterSmall
                        buttonText={'Wyloguj'}
                        linkTo={'/wylogowano'}
                    />
                </>
            case false:
                return <>
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
                </>
        }
    }

    return (
        <ul className="Login">
            {login === true ? <p className='Login-message'>
                Cześć {'xyz@abc.com'}!
            </p> : null}
            {bttnChange()}
        </ul>
    )
}