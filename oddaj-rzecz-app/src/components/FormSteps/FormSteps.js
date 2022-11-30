import {FormOne} from "../FormOne/FormOne";
import {FormTwo} from "../FormTwo/FormTwo";
import './FormSteps.scss';
import {FormThree} from "../FormThree/FormThree";

export function FormSteps() {
    return (
        <div className="FormSteps">
            <div className="FormSteps-background"/>
            {/*<FormOne />*/}
            {/*<FormTwo />*/}
            <FormThree />
        </div>
    )
}