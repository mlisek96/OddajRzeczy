import './FormInputTextarea.scss';

export function FormInputTextarea({name, value, disabled, className, onChange}) {
    return (
        <div className={className}>
            <label
                htmlFor={name}
                className={`${className}-label`}
            >
                Uwagi <br/>dla kuriera
            </label>
            <textarea
                name={name}
                minLength='50'
                maxLength='200'
                value={value}
                className={`${className}-textarea`}
                disabled={disabled}
                onChange={onChange}
            />
        </div>
    )
}