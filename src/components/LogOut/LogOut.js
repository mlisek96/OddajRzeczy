import {DecorationHeader} from "../DecorationHeader/DecorationHeader";
import {ButtonMainPage} from "../ButtonMainPage/ButtonMainPage";
import './LogOut.scss';

export function LogoOutComponent() {
    return (
        <div className="LogOut">
            <DecorationHeader
                headerText={'Wylogowanie nastąpiło pomyślnie!'}
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