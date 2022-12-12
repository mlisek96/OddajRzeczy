import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext"
import {ContactUsFormInput} from "../ContactUsFormInput/ContactUsFormInput";
import {ButtonLogInRegister} from "../ButtonLoginInRegister/ButtonLogInRegister";
import './RegisterContainer.scss';

const validateEmail = (email) => {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}

const validateFunction = (register) => {
    const errorMsg = {}

    if (!register.email) {
        errorMsg.email = 'Entered email is required'
    } else if (validateEmail(register.email) === false) {
        errorMsg.email = 'Entered email is invalid'
    }

    if (!register.password) {
        errorMsg.password = 'Entered password is required'
    } else if (register.password.length < 6) {
        errorMsg.password = 'Password has contain 6 or more characters'
    }

    if (!register.repeatPassword) {
        errorMsg.repeatPassword = 'Entered password is required'
    } else if (register.repeatPassword !== register.password) {
        errorMsg.repeatPassword = 'Entered password has been the same as above'
    }

    return Object.keys(errorMsg).length > 0 ? errorMsg : null
}

export function RegisterContainer() {
    const [errorMsg, setErrorMsg] = useState(null)
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)
    const [register, setRegister] = useState({
        email: '',
        password: '',
        repeatPassword: '',
    })
    const navigate = useNavigate()
    const {signup} = useAuth()

    const handleChange= (event) => {
        const {name, value} = event.target
        setRegister(prevRegister => {
            return {
                ...prevRegister,
                [name]: value
            }
        })
    }

    const handleClick = async (event) => {
        event.preventDefault();
        const errorMsg = validateFunction(register)

        if (errorMsg) {
            setErrorMsg(errorMsg)
            return
        }

        try {
            setErrorMsg(null)
            setSuccess('')
            setLoading(true)
            await signup(register.email, register.password)
            navigate('/')
        } catch (event) {
            setSuccess('error')
            setErrorMsg(errorMsg)
        }

        setLoading(false)
    }

    return (
        <form className="RegisterContainer">
            <div className="RegisterContainer-form">
                {success === 'error' ? <p
                    className={'RegisterContainer-form-error'}
                >
                    Konto nie zostało utworzone!<br/>Spróbuj ponownie.
                </p> : null}
                <ContactUsFormInput
                    name={'email'}
                    label={'Email'}
                    type={'email'}
                    value={register.email}
                    onChange={handleChange}
                    errorMsg={errorMsg}
                />
                <ContactUsFormInput
                    name={'password'}
                    label={'Hasło'}
                    type={'password'}
                    value={register.password}
                    onChange={handleChange}
                    errorMsg={errorMsg}
                />
                <ContactUsFormInput
                    name={'repeatPassword'}
                    label={'Powtórz hasło'}
                    type={'password'}
                    value={register.repeatPassword}
                    onChange={handleChange}
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
                    disabled={loading}
                />
            </div>
        </form>
    )
}