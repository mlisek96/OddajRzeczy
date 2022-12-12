import {DecorationHeader} from "../DecorationHeader/DecorationHeader";
import {RegisterContainer} from "../RegisterContainer/RegisterContainer";
import './Register.scss';

export function RegisterComponent() {
    return (
        <div className="Register">
            <DecorationHeader
                headerText={'Załóż konto'}
            />
            <RegisterContainer />
        </div>
    )

}