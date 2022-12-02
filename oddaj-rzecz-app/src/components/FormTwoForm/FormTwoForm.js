import {ButtonNextPrevious} from "../ButtonNextPrevious/ButtonNextPrevious";
import {FormSelect} from "../FormSelect/FormSelect";
import './FormTwoForm.scss';

export function FormTwoForm() {
    return (
        <form className="FormTwoForm">
            <div className="FormTwoForm-select">
                <FormSelect
                    name={'bags'}
                    label={'Liczba 60l worków:'}
                    placeholder={'-wybierz-'}
                    // value={value}
                    option1={'1'}
                    option2={'2'}
                    option3={'3'}
                    option4={'4'}
                    option5={'5'}
                />
            </div>
        </form>
    )
}