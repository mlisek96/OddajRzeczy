import {useState} from "react";
import {ContactUsFormInput} from "../ContactUsFormInput/ContactUsFormInput";
import {ContactUsTextarea} from "../ContactUsFormTextarea/ContactUsTextarea";
import {ButtonSubmit} from "../ButtonSubmit/ButtonSubmit";
import './ContactUsForm.scss';

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

const validateFunction = (form) => {
    const errorMsg = {}

    if (!form.name) {
        // errorMsg.name = 'Entering name is required'
        errorMsg.name = 'Entered name is required'
    } else if (form.name.trim().indexOf('') !== -1) {
        errorMsg.name = 'Name has contain only one word'
    }

    if (!form.email) {
        // errorMsg.email = 'Entering email is required'
        errorMsg.email = 'Entered email is invalid'
    } else if (validateEmail(form.email)) {
        errorMsg.email = 'Entered email is invalid'
    }

    if (!form.message) {
        // errorMsg.message = 'Entering message is required'
        errorMsg.message = 'Message has contain more than 120'
    } else if (form.message.length < 120) {
        errorMsg.message = 'Message has contain more than 120'
    }

    return Object.keys(errorMsg).length > 0 ? errorMsg : null;
}

export function ContactUsForm() {
    const [errorMsg, setErrorMsg] = useState(null)
    const [success, setSuccess] = useState(null)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChangeName = (event) => {
        const {name, value} = event.target
        setForm(prevForm => {
            return {
                ...prevForm,
                [name]: value
            }
        })
    }

    const handleChangeEmail = (event) => {
        const {name, value} = event.target
        setForm(prevForm => {
            return {
                ...prevForm,
                [name]: value
            }
        })
    }

    const handleChangeMessage = (event) => {
        const {name, value} = event.target
        setForm(prevForm => {
            return {
                ...prevForm,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        const errorMsg = validateFunction(form)

        if (errorMsg) {
            setErrorMsg(errorMsg)
            console.log(errorMsg)
            return
        } else if (errorMsg === null) {
            setSuccess(success)
        }

        setForm({
            name: '',
            email: '',
            message: '',
        })
    }

    return (
        <div className="ContactUsForm">
            {success !== null ? <p
                className={'ContactUsForm-success'}
            >
             Wiadomość została wysłana!<br/>Wkrótce się skontaktujemy.
            </p> : null}
            <div className="ContactUsForm-inputs">
                <ContactUsFormInput
                    type={'text'}
                    name={'name'}
                    label={'Wpisz swoje imię'}
                    placeholder={'Krzysztof'}
                    value={form.name}
                    onChange={handleChangeName}
                    errorMsg={errorMsg}
                />
                <ContactUsFormInput
                    type={'email'}
                    name={'email'}
                    label={'Wpisz swój email'}
                    placeholder={'abc@xyz.pl'}
                    value={form.email}
                    onChange={handleChangeEmail}
                    errorMsg={errorMsg}
                />
            </div>
            <ContactUsTextarea
                name={'message'}
                label={'Wpisz swoją wiadomość'}
                placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
                    ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ' +
                    'ut aliquip ex ea commodo consequat.'}
                value={form.message}
                onChange={handleChangeMessage}
                errorMsg={errorMsg}
            />
            <div className="ContactUsForm-button">
                <ButtonSubmit
                    buttonText={'Wyślij'}
                    onClick={handleClick}
                />
            </div>
        </div>
    )
}