import './FormSelect.scss';
import {useEffect, useState} from "react";

export function FormSelect({
                               name,
                               label,
                               onChange,
                               placeholder,
                               value,
                               value1,
                               value2,
                               value3,
                               value4,
                               value5
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
                onChange={onChange}
                value={value}
            >
                <option
                    className="FormSelect-select__option"
                    defaultValue=''
                    key={placeholder}
                >
                    {placeholder}
                </option>
                <option
                    className="FormSelect-select__option"
                    value={value1}
                    key={value1}
                >
                    {value1}
                </option>
                <option
                    className="FormSelect-select__option"
                    value={value2}
                    key={value2}
                >
                    {value2}
                </option>
                <option
                    className="FormSelect-select__option"
                    value={value3}
                    key={value3}
                >
                    {value3}
                </option>
                <option
                    className="FormSelect-select__option"
                    value={value4}
                    key={value4}
                >
                    {value4}
                </option>
                <option
                    className="FormSelect-select__option"
                    value={value5}
                    key={value5}
                >
                    {value5}
                </option>
            </select>
        </div>
    )
}