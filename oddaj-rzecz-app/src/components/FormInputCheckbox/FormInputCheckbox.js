import './FormInputCheckbox.scss';

export function FormInputCheckbox({value}) {
    return (
        <fieldset className='Checkbox'>
            <legend className='Checkbox-header'>Komu chcesz pomóc?</legend>
            <div className="Checkbox-options">
                <div className='Checkbox-options__item'>
                    <input className='Checkbox-options__item-input' type="checkbox" id='children' value={value}/>
                    <label className='Checkbox-options__item-label' htmlFor="children">dzieciom</label>
                </div>
                <div className='Checkbox-options__item'>
                    <input className='Checkbox-options__item-input' type="checkbox" id='mothers' value={value}/>
                    <label className='Checkbox-options__item-label' htmlFor="mothers">samotnym matkom</label>
                </div>
                <div className='Checkbox-options__item'>
                    <input className='Checkbox-options__item-input' type="checkbox" id='homeless' value={value}/>
                    <label className='Checkbox-options__item-label' htmlFor="homeless">bezdomnym</label>
                </div>
                <div className='Checkbox-options__item'>
                    <input className='Checkbox-options__item-input' type="checkbox" id='disabled' value={value}/>
                    <label className='Checkbox-options__item-label' htmlFor="disabled">niepełnosprawnym</label>
                </div>
                <div className='Checkbox-options__item'>
                    <input className='Checkbox-options__item-input' type="checkbox" id='elders' value={value}/>
                    <label className='Checkbox-options__item-label' htmlFor="elders">osobom starszym</label>
                </div>
            </div>
        </fieldset>
    )
}