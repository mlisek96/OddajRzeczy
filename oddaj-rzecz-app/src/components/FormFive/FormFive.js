import {FormFiveForm} from "../FormFiveForm/FormFiveForm";
import IconTshirt from '../../assets/Icon-1.svg'
import IconRound from '../../assets/Icon-4.svg'
import './FormFive.scss';

export function FormFive({formState}) {
    return (
        <div className="FormFive">
            <div className="FormFive-form">
                <h2 className="FormFive-form__header">Podsumowanie Twojej darowizny</h2>
                <div className="FormFive-form-stuff">
                    <h3 className="FormFive-form-stuff__header">Oddajesz:</h3>
                    <div className="FormFive-form-stuff__row">
                        <img src={IconTshirt} alt="Icon Tshirt" className="FormFive-form-stuff__row__img"/>
                        <p
                            className="FormFive-form-stuff__row__text"
                        >
                            {formState.bags} worki, {formState.type}, {formState.helpGroups}
                        </p>
                    </div>
                    <div className="FormFive-form-stuff__row">
                        <img src={IconRound} alt="Icon Round" className="FormFive-form-stuff__row__img"/>
                        <p
                            className="FormFive-form-stuff__row__text"
                        >
                            dla lokalizacji: {formState.localization === '' ? formState.localizationSpecific : formState.localization}
                        </p>
                    </div>
                </div>
                <FormFiveForm formState={formState}/>
            </div>
        </div>
    )
}