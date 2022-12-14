import {DecorationHeader} from "../DecorationHeader/DecorationHeader";
import './FormSix.scss';
import {ButtonMainPage} from "../ButtonMainPage/ButtonMainPage";

export function FormSix() {
    return (
        <div className="FormSix">
            <DecorationHeader
                headerText={'Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie informacje o odbiorze.'}
                style={{
                    width: '39.25rem',
                    fontWeight: '300'
                }}
            />
            <ButtonMainPage
                buttonText={'Strona główna'}
                linkTo={'/oddaj-rzeczy'}
                style={{
                    marginTop: '2.1875rem',
                }}
            />
        </div>
    )
}