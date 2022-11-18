import {WhoWeHelpOneLine} from "../WhoWeHelpOneLine/WhoWeHelpOneLine";
import {ButtonPage} from "../ButtonPage/ButtonPage";
import {WhoWeHelpLastLine} from "../WhoWeHelpLastLine/WhoWeHelpLastLine";
import './WhoWeHelpFundations.scss';

export function WhoWeHelpFundations() {
    return (
        <div className="WhoWeHelpFundations">
            <p className="WhoWeHelpFundations-text">
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </p>
            <div className="WhoWeHelpFundations-lines">
                <WhoWeHelpOneLine
                    header={'Fundacja “Dbam o Zdrowie”'}
                    description={'Cel i misja: Pomoc dzieciom z ubogich rodzin.'}
                    scope={'ubrania, jedzenie, sprzęt AGD, meble, zabawki'}
                />
                <WhoWeHelpOneLine
                    header={'Fundacja “Dla dzieci”'}
                    description={'Cel i misja: Pomoc dzieciom z ubogich rodzin.'}
                    scope={'ubrania, meble, zabawki'}
                />
                <WhoWeHelpLastLine
                    header={'Fundacja “Bez domu”'}
                    description={'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.'}
                    scope={'ubrania, jedzenie, ciepłe koce'}
                />
            </div>
            <div className="WhoWeHelpFundations-pages">
                <ButtonPage buttonNumber={1} />
                <ButtonPage buttonNumber={2} />
                <ButtonPage buttonNumber={3} />
            </div>
        </div>
    )
}