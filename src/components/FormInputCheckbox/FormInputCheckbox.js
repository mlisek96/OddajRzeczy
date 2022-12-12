import './FormInputCheckbox.scss';
import {FormInputCheckboxSingle} from "../FormInputCheckboxSingle/FormInputCheckboxSingle";

export function FormInputCheckbox({formState, setFormState}) {
    const clickHandler = (event) => {
        setFormState(prev => {
            return {
                ...prev,
                helpGroups: [...prev.helpGroups, event.target.value]
                // helpGroups: [...prev, event.target.value]
                // helpGroups: [...helpGroups, event.target.value]
            }
        })
    }

    return (
        <fieldset className='Checkbox'>
            <legend className='Checkbox-header'>Komu chcesz pomóc?</legend>
            <div className="Checkbox-options">
                <FormInputCheckboxSingle
                    name={'helpGroups'}
                    id={'children'}
                    label={'dzieciom'}
                    value={'dzieciom'}
                    onClick={clickHandler}
                />
                <FormInputCheckboxSingle
                    name={'helpGroups'}
                    id={'mothers'}
                    label={'samotnym matkom'}
                    value={'samotnym matkom'}
                    onClick={clickHandler}
                />
                <FormInputCheckboxSingle
                    name={'helpGroups'}
                    id={'homeless'}
                    label={'bezdomnym'}
                    value={'bezdomnym'}
                    onClick={clickHandler}
                />
                <FormInputCheckboxSingle
                    name={'helpGroups'}
                    id={'disabled'}
                    label={'niepełnosprawnym'}
                    value={'niepełnosprawnym'}
                    onClick={clickHandler}
                />
                <FormInputCheckboxSingle
                    name={'helpGroups'}
                    id={'elders'}
                    label={'osobom starszym'}
                    value={'osobom starszym'}
                    onClick={clickHandler}
                />
            </div>
        </fieldset>
    )
}