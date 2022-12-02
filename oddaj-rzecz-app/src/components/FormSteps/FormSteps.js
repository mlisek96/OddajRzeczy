import {useEffect, useState} from "react";
import {FormOne} from "../FormOne/FormOne";
import {FormTwo} from "../FormTwo/FormTwo";
import {FormThree} from "../FormThree/FormThree";
import {FormFour} from "../FormFour/FormFour";
import {ButtonNextPrevious} from "../ButtonNextPrevious/ButtonNextPrevious";
import './FormSteps.scss';
import {FormFive} from "../FormFive/FormFive";
import {FormBar} from "../FormBar/FormBar";
import {FormSix} from "../FormSix/FormSix";

export function FormSteps() {
    const [step, setStep] = useState(1);
    const [formState, setFormState] = useState({});

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

    const contentChange = () => {
        if (step < 1) {
            setStep(1)
        } else if (step > 6) {
            setStep(6)
        }

        switch (step) {
            case 1:
                return <>
                    <FormOne setFormState={setFormState}/>
                    {bttnChange()}
                </>;
            case 2:
                return <>
                    <FormTwo setFormState={setFormState}/>
                    {bttnChange()}
                </>;
            case 3:
                return <>
                    <FormThree setFormState={setFormState}/>
                    {bttnChange()}
                </>;
            case 4:
                return <>
                    <FormFour setFormState={setFormState}/>
                    {bttnChange()}
                </>;
            case 5:
                return <>
                    <FormFive/>
                    {bttnChange()}
                </>;
            case 6:
                return <FormSix/>
            default:
                return <>
                    <FormOne setFormState={setFormState}/>
                    {bttnChange()}
                </>;
        }
    }

    return (
        <div className="FormSteps">
            {formBarChange()}
            <div className="FormSteps-background"/>
            <div className="FormSteps-content">
                {contentChange()}
            </div>
        </div>
    )
}