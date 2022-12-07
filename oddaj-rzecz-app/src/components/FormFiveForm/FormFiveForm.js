import {FormInput} from "../FormInput/FormInput";
import {FormInputTextarea} from "../FormInputTextarea/FormInputTextarea";
import {addDoc, collection} from "firebase/firestore";
import {datebase} from "../../config/firebase";
import {useAuth} from "../../context/AuthContext";
import './FormFiveForm.scss';

export function FormFiveForm({formState}) {
    const {currentUser} = useAuth()
    const formsRef = collection(datebase, "forms")
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Wysyłka");
        const doc = await addDoc(formsRef, {
            type: formState.type,
            bags: formState.bags,
            localization: formState.localization,
            helpGroups: formState.helpGroups,
            localizationSpecific: formState.localizationSpecific,
            street: formState.street,
            city: formState.city,
            postCode: formState.postCode,
            phone: formState.phone,
            date: formState.date,
            time: formState.time,
            note: formState.note,
            userEmail: currentUser.email,
            userId: currentUser.uid
        });
        console.log(doc);
    }
    return (
        <div className="FormFiveForm">
            <div className="FormFiveForm-address">
                <h3
                    className="FormFiveForm__header"
                >
                    Adres odbioru:
                </h3>
                <div className="FormFiveForm-address__inputs">
                    <FormInput
                        name={'street'}
                        label={'Ulica'}
                        type={'text'}
                        value={formState.street}
                        className={'InputSummary'}
                        disabled={'disabled'}
                    />
                    <FormInput
                        name={'city'}
                        label={'Miasto'}
                        type={'text'}
                        value={formState.city}
                        className={'InputSummary'}
                        disabled={'disabled'}
                    />
                    <FormInput
                        name={'postCode'}
                        label={'Kod pocztowy'}
                        // type={'?'}
                        value={formState.postCode}
                        className={'InputSummary'}
                        disabled={'disabled'}
                    />
                    <FormInput
                        name={'phone'}
                        label={'Numer telefonu'}
                        type={'tel'}
                        pattern={'[0-9]{3}-[0-9]{3}-[0-9]{3}'}
                        autoCorrect={'on'}
                        value={formState.phone}
                        className={'InputSummary'}
                        disabled={'disabled'}
                    />
                </div>
            </div>
            <div className="FormFiveForm-term">
                <h3
                    className="FormFiveForm__header"
                >
                    Termin odbioru:
                </h3>
                <div className="FormFiveForm-term__inputs">
                    <FormInput
                        name={'date'}
                        label={'Data'}
                        type={'date'}
                        value={formState.date}
                        className={'InputSummary'}
                        disabled={'disabled'}
                    />
                    <FormInput
                        name={'time'}
                        label={'Godzina'}
                        type={'time'}
                        value={formState.time}
                        className={'InputSummary'}
                        disabled={'disabled'}
                    />
                    <FormInputTextarea
                        name={'note'}
                        value={formState.note}
                        disabled={'disabled'}
                        className={'TextareaSummary'}
                    />
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <button
                    onClick={() => console.log("click")}
                    className={"FormFiveForm-bttn"}
                >
                    Potwierdzam
                </button>
            </form>
        </div>
    )
}