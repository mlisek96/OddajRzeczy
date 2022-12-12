import {ContactUsContent} from "../ContactUsContent/ContactUsContent";
import './ContactUs.scss';
import {PageFooter} from "../PageFooter/PageFooter";

export function ContactUs() {
    return (
        <div className="ContactUs">
            <div className="ContactUs-background" />
            <ContactUsContent />
            <PageFooter />
        </div>
    )
}