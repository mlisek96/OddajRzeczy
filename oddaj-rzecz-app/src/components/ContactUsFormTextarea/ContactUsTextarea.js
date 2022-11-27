import './ContactUsTextarea.scss';

export function ContactUsTextarea({name, label, placeholder, value, onChange, errorMsg}) {
    return (
        <div className="Textarea">
            <label
                className='Textarea-label'
                htmlFor={name}
            >
                {label}
            </label>
            <textarea
                className={errorMsg !== null ? `Textarea-error` : 'Textarea-textarea'}
                name={name}
                minLength='120'
                maxLength='300'
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />

            {errorMsg !== null ? <p className={'Textarea-error-msg'}>Wiadomość musi mieć conajmniej 120 znaków!</p> : null}
        </div>
    )
}