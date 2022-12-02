import './FormInput.scss';

export function FormInput({name, label, value, className, type, pattern, autoCorrect, step}) {
    return (
        <div className={className}>
            <label
                htmlFor={name}
                className={`${className}-label`}
            >
                {label}
            </label>
            <input
                type={type}
                className={`${className}-input`}
                value={value}
                name={name}
                pattern={pattern}
                autoCorrect={autoCorrect}
                step={step}
            />
        </div>
    )
}