import {DecorationHeader} from "../DecorationHeader/DecorationHeader";
import {LogInContainer} from "../LogInContainer/LogInContainer";
import './LogIn.scss';

export function LogInComponent() {
    return (
        <div className="LogIn">
            <DecorationHeader
                headerText={"Zaloguj się"}
            />
            <LogInContainer/>
        </div>
    )
}