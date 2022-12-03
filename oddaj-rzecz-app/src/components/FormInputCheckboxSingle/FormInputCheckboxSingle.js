import './FormInputCheckboxSingle.scss';

export function FormInputCheckboxSingle({name, id, value, onClick, label}) {
    return (
        <div className="Checkbox">
            <input
                className='Checkbox-input'
                name={name}
                type="checkbox"
                id={id}
                value={value}
                onClick={onClick}/>
            <label
                className='Checkbox-label'
                htmlFor={id}
            >
                {label}
            </label>
        </div>
    )
}