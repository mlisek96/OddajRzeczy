import {useEffect, useState} from "react";
import './ContactUsFormInput.scss';

export function ContactUsFormInput({type, name, label, placeholder, value, onChange, errorMsg}) {
    const [errorName, setErrorName] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)

    useEffect(() => {
        if (type === 'text') {
            setErrorName('Podane imię jest nieprawidłowe!')
        } else if (type === 'email') {
            setErrorEmail('Podany email jest nieprawidłowy!')
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

            {errorMsg !== null ? <p className={'Input-error-msg'}>{errorName}</p> : null}
            {errorMsg !== null ? <p className={'Input-error-msg'}>{errorEmail}</p> : null}
        </div>
    )
}