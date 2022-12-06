import {DecorationHeader} from "../DecorationHeader/DecorationHeader";
import {ButtonMainPage} from "../ButtonMainPage/ButtonMainPage";
import './NotFoundPage.scss';
import {PageFooter} from "../PageFooter/PageFooter";

export function NotFoundPageContainer() {
    return (
        <div className="NotFoundPage">
            <DecorationHeader
                headerText={'Błąd 404! Strona nie została znaleziona!'}
            />
            <ButtonMainPage
                buttonText={'Strona główna'}
                linkTo={'/'}
                style={{
                    marginTop: '2.1875rem',
                }}
            />
            <PageFooter />
        </div>
    )
}