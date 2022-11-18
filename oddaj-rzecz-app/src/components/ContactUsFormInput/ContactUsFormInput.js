import './ContactUsFormInput.scss';

export function ContactUsFormInput({type, name, label, placeholder}) {
    return (
        <div className="Input">
            <label
                className='Input-label'
                htmlFor={name}
            >
                {label}
            </label>
            <input
                className='Input-input'
                type={type}
                name={name}
                placeholder={placeholder}
            />
        </div>
    )
}