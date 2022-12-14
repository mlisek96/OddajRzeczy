import {DecorationHeader} from "../DecorationHeader/DecorationHeader";
import {SimpleStepsBackground} from "../SimpleStepsBackground/SimpleStepsBackground";
import {ButtonBasic} from "../ButtonBasic/ButtonBasic";
import './SimpleSteps.scss'

export function SimpleSteps() {
    return (
        <div className='SimpleSteps' id='SimpleSteps'>
            <DecorationHeader headerText={'Wystarczą 4 proste kroki'}/>
            <SimpleStepsBackground />
            <ButtonBasic buttonText={'Oddaj rzeczy'} linkTo={'/formularz'}/>
        </div>
    )
}