import './FormInputTextarea.scss';

export function FormInputTextarea({name, value}) {
    return (
        <div className="InputTextarea">
            <label
                htmlFor={name}
                className="InputTextarea-label"
            >
                Uwagi <br/>dla kuriera
            </label>
            <textarea
                name={name}
                minLength='50'
                maxLength='200'
                value={value}
                className="InputTextarea-textarea"
            />
        </div>
    )
}