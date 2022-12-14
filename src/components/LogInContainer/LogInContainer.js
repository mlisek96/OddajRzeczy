import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";
import {ContactUsFormInput} from "../ContactUsFormInput/ContactUsFormInput";
import {ButtonLogInRegister} from "../ButtonLoginInRegister/ButtonLogInRegister";
import './LogInContainer.scss';

function validateEmail(email) {
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
    const [loading, setLoading] = useState(false)
    const [logIn, setLogIn] = useState({
        email: '',
        password: '',
    })
    const navigate = useNavigate()
    const {login} = useAuth()

    const handleChange = (event) => {
        const {name, value} = event.target
        setLogIn(prevLogIn => {
            return {
                ...prevLogIn,
                [name]: value
            }
        })
    }

    const handleClick = async (event) => {
        event.preventDefault();
        const errorMsg = validateFunction(logIn)

        if (errorMsg) {
            setErrorMsg(errorMsg)
            return
        }

        try {
            setErrorMsg(null)
            setSuccess('')
            setLoading(true)
            await login(logIn.email, logIn.password)
            navigate('/oddaj-rzeczy')
        } catch (event) {
            setSuccess('error')
            setErrorMsg(errorMsg)
        }

        setLoading(false)
    }

    return (
        <div className="LogInContainer">
            <div className="LogInContainer-form">
                {success === 'error' ? <p
                    className={'LogInContainer-form-error'}
                >
                    Nie można zalogować!<br/>Spróbuj ponownie.
                </p> : null}
                <ContactUsFormInput
                    name={'email'}
                    label={'Email'}
                    type={'email'}
                    value={logIn.email}
                    onChange={handleChange}
                    errorMsg={errorMsg}
                />
                <ContactUsFormInput
                    name={'password'}
                    label={'Hasło'}
                    type={'password'}
                    value={logIn.password}
                    onChange={handleChange}
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
                    disabled={loading}
                />
                <ButtonLogInRegister
                    buttonText={"Zaloguj się"}
                    onClick={handleClick}
                />
            </div>
        </div>
    )
}