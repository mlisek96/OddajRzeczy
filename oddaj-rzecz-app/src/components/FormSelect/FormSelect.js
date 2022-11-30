import './FormSelect.scss';

export function FormSelect({
                               name,
                               label,
                               onSelect,
                               placeholder,
                               value1,
                               value2,
                               value3,
                               value4,
                               value5,
                           }) {
    return (
        <div className="FormSelect">
            <label
                htmlFor={name}
                className="FormSelect-label"
            >
                {label}
            </label>
            <select
                className="FormSelect-select"
                name={name}
                id={name}
                onSelect={onSelect}
            >
                <option
                    className="FormSelect-select__option"
                    value=''
                    defaultValue=''
                >
                    {placeholder}
                </option>
                <option
                    className="FormSelect-select__option"
                    value={value1}
                >
                    {value1}
                </option>
                <option
                    className="FormSelect-select__option"
                    value={value2}
                >
                    {value2}
                </option>
                <option
                    className="FormSelect-select__option"
                    value={value3}
                >
                    {value3}
                </option>
                <option
                    className="FormSelect-select__option"
                    value={value4}
                >
                    {value4}
                </option>
                <option
                    className="FormSelect-select__option"
                    value={value5}
                >
                    {value5}
                </option>
            </select>
        </div>
    )
}