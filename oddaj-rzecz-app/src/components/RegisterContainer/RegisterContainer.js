import {useState} from "react";
import {ContactUsFormInput} from "../ContactUsFormInput/ContactUsFormInput";
import {ButtonLogInRegister} from "../ButtonLoginInRegister/ButtonLogInRegister";
import './RegisterContainer.scss';

const validateEmail = (email) => {
    // return email.match(
    //     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    // )
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}

const validateFunction = (register) => {
    const errorMsg = {}

    if (!register.email) {
        // errorMsg.email = 'Entered email is required'
        errorMsg.email = 'Entered email is invalid'
    } else if (validateEmail(register.email) === false) {
        errorMsg.email = 'Entered email is invalid'
    }

    if (!register.password) {
        // errorMsg.password = 'Entered password is required'
        errorMsg.password = 'Password has contain 6 or more characters'
    } else if (register.password.length < 6) {
        errorMsg.password = 'Password has contain 6 or more characters'
    }

    if (!register.repeatPassword) {
        // errorMsg.repeatPassword = 'Entered password is required'
        errorMsg.repeatPassword = 'Entered password has been the same as above'
    } else if (register.repeatPassword !== register.password) {
        errorMsg.repeatPassword = 'Entered password has been the same as above'
    }

    return Object.keys(errorMsg).length > 0 ? errorMsg : null
}

export function RegisterContainer() {
    const [errorMsg, setErrorMsg] = useState(null)
    const [success, setSuccess] = useState(null)
    const [register, setRegister] = useState({
        email: '',
        password: '',
        repeatPassword: '',
    })

    const handleChangeEmail = (event) => {
        const {name, value} = event.target
        setRegister(prevRegister => {
            return {
                ...prevRegister,
                [name]: value
            }
        })
    }

    const handleChangePassword = (event) => {
        const {name, value} = event.target
        setRegister(prevRegister => {
            return {
                ...prevRegister,
                [name]: value
            }
        })
    }

    const handleChangeRepeatPassword = (event) => {
        const {name, value} = event.target
        setRegister(prevRegister => {
            return {
                ...prevRegister,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        const errorMsg = validateFunction(register)

        if (errorMsg) {
            setErrorMsg(errorMsg)
            console.log(errorMsg)
            return
        } else if (errorMsg === null) {
            setSuccess('successRegister')
        }

        setRegister({
            email: '',
            password: '',
            repeatPassword: '',
        })
    }

    return (
        <div className="RegisterContainer">
            <div className="RegisterContainer-form">
                <ContactUsFormInput
                    name={'email'}
                    label={'Email'}
                    type={'email'}
                    value={register.email}
                    onChange={handleChangeEmail}
                    errorMsg={errorMsg}
                />
                <ContactUsFormInput
                    name={'password'}
                    label={'Hasło'}
                    type={'password'}
                    value={register.password}
                    onChange={handleChangePassword}
                    errorMsg={errorMsg}
                />
                <ContactUsFormInput
                    name={'repeatPassword'}
                    label={'Powtórz hasło'}
                    type={'password'}
                    value={register.repeatPassword}
                    onChange={handleChangeRepeatPassword}
                    errorMsg={errorMsg}
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
                    onClick={handleClick}
                    linkTo={success === 'successRegister' ? '/' : null}
                />
            </div>
        </div>
    )
}