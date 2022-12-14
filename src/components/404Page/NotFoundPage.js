import {DecorationHeader} from "../DecorationHeader/DecorationHeader";
import {ButtonMainPage} from "../ButtonMainPage/ButtonMainPage";
import './NotFoundPage.scss';
import {PageFooter} from "../PageFooter/PageFooter";

export function NotFoundPageContainer() {
    return (
        <div className="NotFoundPage">
            <p className="NotFoundPage-header">Błąd 404!</p>
            <DecorationHeader
                headerText={'Strona nie została znaleziona!'}
            />
            <ButtonMainPage
                buttonText={'Strona główna'}
                linkTo={'/oddaj-rzeczy'}
                style={{
                    marginTop: '2.1875rem',
                }}
            />
            <PageFooter />
        </div>
    )
}