export function FormInputRadio({name, label, value, onClick}) {
    return (
        <div className="InputRadio">
            <input
                type="radio"
                name={name}
                value={value}
                onClick={onClick}
            />
            <label
                htmlFor={name}
                className='InputRadio-label'
            >
                {label}
            </label>
        </div>
    )
}