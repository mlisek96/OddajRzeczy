import './ContactUsTextarea.scss';

export function ContactUsTextarea({name, label, placeholder}) {
    return (
        <div className="Textarea">
            <label
                className='Textarea-label'
                htmlFor={name}
            >
                {label}
            </label>
            <textarea
                className='Textarea-textarea'
                name={name}
                minLength='120'
                maxLength='300'
                placeholder={placeholder}
            />
        </div>
    )
}