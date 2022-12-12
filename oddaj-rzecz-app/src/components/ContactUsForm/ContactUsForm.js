import {useState} from "react";
import {ContactUsFormInput} from "../ContactUsFormInput/ContactUsFormInput";
import {ContactUsTextarea} from "../ContactUsFormTextarea/ContactUsTextarea";
import {ButtonSubmit} from "../ButtonSubmit/ButtonSubmit";
import './ContactUsForm.scss';

const validateEmail = (email) => {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
};

const validateFunction = (form) => {
    const errorMsg = {}

    if (!form.name) {
        errorMsg.name = 'Entering name is required'
    } else if (/\s/.test(form.name) === true) {
        errorMsg.name = 'Name has contain only one word'
    }

    if (!form.email) {
        errorMsg.email = 'Entering email is required'
    } else if (validateEmail(form.email) === false) {
        errorMsg.email = 'Entered email is invalid'
    }

    if (!form.message) {
        errorMsg.message = 'Entering message is required'
    } else if (form.message.length < 120) {
        errorMsg.message = 'Message should be at least 120 characters long'
    }

    return Object.keys(errorMsg).length > 0 ? errorMsg : null;
}

export function ContactUsForm() {
    const [errorMsg, setErrorMsg] = useState(null)
    const [success, setSuccess] = useState({
        status: '',
    })
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setForm(prevForm => {
            return {
                ...prevForm,
                [name]: value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const errorMsg = validateFunction(form);
        // console.log(form);

        if (errorMsg) {
            setErrorMsg(errorMsg)
            console.log(errorMsg)
        } else {
            fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
                .then(response => response.json())
                .then(data => setSuccess(data))
                .catch(error => setSuccess(error))
        }
    }

    return (
        <form onSubmit={submitHandler} className="ContactUsForm">
            {success.status === 'success' ? <p
                className={'ContactUsForm-success'}
            >
                Wiadomość została wysłana!<br/>Wkrótce się skontaktujemy.
            </p> : null}
            {success.status === 'error' ? <p
                className={'ContactUsForm-error'}
            >
                Wiadomość nie została wysłana!<br/>Wypełnij formularz poprawnie.
            </p> : null}
            <div className="ContactUsForm-inputs">
                <ContactUsFormInput
                    type={'text'}
                    name={'name'}
                    label={'Wpisz swoje imię'}
                    placeholder={'Krzysztof'}
                    value={form.name}
                    onChange={handleChange}
                    errorMsg={errorMsg}
                />
                <ContactUsFormInput
                    type={'email'}
                    name={'email'}
                    label={'Wpisz swój email'}
                    placeholder={'abc@xyz.pl'}
                    value={form.email}
                    onChange={handleChange}
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
                onChange={handleChange}
                errorMsg={errorMsg}
            />
            <div className="ContactUsForm-button">
                <ButtonSubmit
                    buttonText={'Wyślij'}
                />
            </div>
        </form>
    )
}