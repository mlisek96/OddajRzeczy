import {DecorationHeader} from "../DecorationHeader/DecorationHeader";
import {ContactUsForm} from "../ContactUsForm/ContactUsForm";
import './ContactUsContent.scss';

export function ContactUsContent() {
    return (
        <div className="ContactUsContent">
            <DecorationHeader headerText={'Skontaktuj się z nami'} />
            <ContactUsForm />
        </div>
    )
}