import {ContactUs} from "../components/ContactUs/ContactUs";
import {FormHeader} from "../components/FormHeader/FormHeader";
import {FormSteps} from "../components/FormSteps/FormSteps";

export function Form() {
    return (
        <div>
            <FormHeader />
            <FormSteps />
            <ContactUs />
        </div>
    )
}