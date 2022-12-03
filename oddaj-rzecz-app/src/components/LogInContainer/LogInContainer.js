import {useState} from "react";
import {ContactUsFormInput} from "../ContactUsFormInput/ContactUsFormInput";
import {ButtonLogInRegister} from "../ButtonLoginInRegister/ButtonLogInRegister";
import './LogInContainer.scss';

function validateEmail(email) {
    // return email.match(
    //     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    // )
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}

const validateFunction = (logIn) => {
    const errorMsg = {}

    if (!logIn.email) {
        errorMsg.email = 'Entered email is required'
    } else if (validateEmail(logIn.email) === false) {
        errorMsg.email = 'Entered email is invalid'
    }

    if (!logIn.password) {
        errorMsg.password = 'Entered password is required'
    } else if (logIn.password.length < 6) {
        errorMsg.password = 'Password has contain 6 or more characters'
    }

    return Object.keys(errorMsg).length > 0 ? errorMsg : null
}

export function LogInContainer() {
    const [errorMsg, setErrorMsg] = useState(null)
    const [success, setSuccess] = useState(null)
    const [logIn, setLogIn] = useState({
        email: '',
        password: '',
    })

    const handleChangeEmail = (event) => {
        const {name, value} = event.target
        setLogIn(prevLogIn => {
            return {
                ...prevLogIn,
                [name]: value
            }
        })
    }

    const handleChangePassword = (event) => {
        const {name, value} = event.target
        setLogIn(prevLogIn => {
            return {
                ...prevLogIn,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        const errorMsg = validateFunction(logIn)

        if (errorMsg) {
            setErrorMsg(errorMsg)
            console.log(errorMsg)
            return
        } else if (errorMsg === null) {
            setSuccess('successLogIn')
            // location.href = '/'
        }

        setLogIn({
            email: '',
            password: '',
        })
    }

    return (
        <div className="LogInContainer">
            <div className="LogInContainer-form">
                <ContactUsFormInput
                    name={'email'}
                    label={'Email'}
                    type={'email'}
                    value={logIn.email}
                    onChange={handleChangeEmail}
                    errorMsg={errorMsg}
                />
                <ContactUsFormInput
                    name={'password'}
                    label={'Hasło'}
                    type={'password'}
                    value={logIn.password}
                    onChange={handleChangePassword}
                    errorMsg={errorMsg}
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
                    onClick={handleClick}
                    // linkTo={success === 'successLogIn' ? '/' : null}
                />
            </div>
        </div>
    )
}