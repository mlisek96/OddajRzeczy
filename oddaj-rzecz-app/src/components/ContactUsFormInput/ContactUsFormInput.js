import {useEffect, useState} from "react";
import './ContactUsFormInput.scss';

export function ContactUsFormInput({type, name, label, placeholder, value, onChange, errorMsg}) {
    const [errorName, setErrorName] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorPassword, setErrorPassword] = useState(null)
    const [errorRepeatPassword, setErrorRepeatPassword] = useState(null)

    useEffect(() => {
        if (type === 'text') {
            setErrorName('Podane imię jest nieprawidłowe!')
        } else if (type === 'email') {
            setErrorEmail('Podany email jest nieprawidłowy!')
        } else if (name === 'password') {
            setErrorPassword('Podane hasło jest za krótkie')
        } else if (name === 'repeatPassword') {
            setErrorRepeatPassword('Hasło niezgodne z podanym powyżej')
        }
    }, [])

    return (
        <div className="Input">
            <label
                className='Input-label'
                htmlFor={name}
            >
                {label}
            </label>
            <input
                className={errorMsg !== null ? `Input-error` : 'Input-input'}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {/*czemu działa tylko na null, czemu różny a nie potrójnie równy działa jak string, czemu mi się ładują wszystkie za każdym razem*/}
            {errorMsg !== null ? <p className={'Input-error-msg'}>{errorName}</p> : null}
            {errorMsg !== null ? <p className={'Input-error-msg'}>{errorEmail}</p> : null}
            {errorMsg !== null ? <p className={"Input-error-msg"}>{errorPassword}</p> : null}
            {errorMsg !== null ? <p className={"Input-error-msg"}>{errorRepeatPassword}</p> : null}
        </div>
    )
}