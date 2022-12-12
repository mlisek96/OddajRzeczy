import {useState} from "react";
import {FormOne} from "../FormOne/FormOne";
import {FormTwo} from "../FormTwo/FormTwo";
import {FormThree} from "../FormThree/FormThree";
import {FormFour} from "../FormFour/FormFour";
import {FormFive} from "../FormFive/FormFive";
import {FormBar} from "../FormBar/FormBar";
import {FormSix} from "../FormSix/FormSix";
import {ButtonNextPrevious} from "../ButtonNextPrevious/ButtonNextPrevious";
import './FormSteps.scss';

// const validatePostCode = (postCode) => {
//     let code = /\d{2}-\d{3}/
//     return code.test(postCode)
// }

// const validationFunction = (formState) => {
//     const errorMsg = {}
//
//     if (!formState.type) {
//         errorMsg.type = 'Chose type of help is required'
//     }
//
//     if (!formState.bags) {
//         errorMsg.bags = 'Selected amount of bags is required'
//     }
//
//     if (!formState.localization) {
//         errorMsg.localization = 'Selected localization is required'
//     } else if (formState.localizationSpecific) {
//         errorMsg.localization = null
//     }
//
//     if (!formState.helpGroups) {
//         errorMsg.helpGroups = 'Selected at least one of the help groups is required'
//     }
//
//     if (!formState.street) {
//         errorMsg.street = 'Entering street is required'
//     } else if (formState.street.length <= 2) {
//         errorMsg.street = 'Entered street should be at least 3 characters long'
//     }
//
//     if (!formState.city) {
//         errorMsg.city = 'Entering city is required'
//     } else if (formState.city.length <= 2) {
//         errorMsg.city = 'Entered city should be at least 3 characters long'
//     }
//
//     if (!formState.postCode) {
//         errorMsg.postCode = 'Entering post code is required'
//     } else if (validatePostCode(formState.postCode) === false) {
//         errorMsg.postCode = 'Entered post code is invalid'
//     }
//
//     if (!formState.phone) {
//         errorMsg.phone = 'Entering phone is required'
//     } else if (formState.phone.length !== 9) {
//         errorMsg.phone = 'Entered phone should be 9 characters long '
//     }
//
//     if (!formState.date) {
//         errorMsg.date = 'Entering date is required'
//     }
//
//     return Object.keys(errorMsg).length > 0 ? errorMsg : null;
// }

export function FormSteps() {
    const [step, setStep] = useState(1);
    const [formState, setFormState] = useState({
        type: '',
        bags: '',
        localization: '',
        helpGroups: [],
        localizationSpecific: '',
        street: '',
        city: '',
        postCode: '',
        phone: '',
        date: '',
        time: '',
        note: '',
    });

    const formBarChange = () => {
        switch (step) {
            case 1:
                return <FormBar
                    header={'Ważne!'}
                    text={'Uzupełnij szczegóły dotyczące Twoich rzeczy. ' +
                        'Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.'}
                />
            case 2:
                return <FormBar
                    header={'Ważne!'}
                    text={'Wszystkie rzeczy do oddania zapakuj w 60l worki. ' +
                        'Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.'}
                />
            case 3:
                return <FormBar
                    header={'Ważne!'}
                    text={'Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. ' +
                        'Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.'}
                />
            case 4:
                return <FormBar
                    header={'Ważne!'}
                    text={'Podaj adres oraz termin odbioru rzeczy.'}
                />
        }
    }

    const bttnChange = () => {
        if (step === 5) {
            return (
                <div className="FormSteps-content__btn">
                    <ButtonNextPrevious
                        buttonText={'Wstecz'}
                        onClick={() => setStep(prev => prev - 1)}
                        disabled={step === 1}
                    />
                </div>
            )
        } else {
            return (
                <div className="FormSteps-content__btn">
                    <ButtonNextPrevious
                        buttonText={'Wstecz'}
                        onClick={() => setStep(prev => prev - 1)}
                        disabled={step === 1}
                    />
                    <ButtonNextPrevious
                        buttonText={step === 5 ? 'Potwierdzam' : 'Dalej'}
                        onClick={() => setStep(prev => prev + 1)}
                    />
                </div>
            )
        }
    }

    const formStepsChange = () => {
        if (step < 1) {
            setStep(1)
        } else if (step > 6) {
            setStep(6)
        }

        switch (step) {
            case 1:
                return <>
                    <FormOne formState={formState} setFormState={setFormState}/>
                    {bttnChange()}
                </>;
            case 2:
                return <>
                    <FormTwo formState={formState} setFormState={setFormState}/>
                    {bttnChange()}
                </>;
            case 3:
                return <>
                    <FormThree formState={formState} setFormState={setFormState}/>
                    {bttnChange()}
                </>;
            case 4:
                return <>
                    <FormFour formState={formState} setFormState={setFormState}/>
                    {bttnChange()}
                </>;
            case 5:
                return <>
                    <FormFive
                        formState={formState}
                        setFormState={setFormState}
                        setStep={setStep}
                    />
                        {bttnChange()}

                </>;
            case 6:
                return <FormSix setFormState={setFormState}/>
            default:
                return <>
                    <FormOne formState={formState} setFormState={setFormState}/>
                    {bttnChange()}
                </>;
        }
    }

    return (
        <div className="FormSteps">
            {formBarChange()}
            <div className="FormSteps-background"/>
            <div className="FormSteps-content">
                {formStepsChange()}
            </div>
        </div>
    )
}