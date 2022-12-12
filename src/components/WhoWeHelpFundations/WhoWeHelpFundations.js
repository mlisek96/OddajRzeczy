import {WhoWeHelpPaginate} from "../WhoWeHelpPaginate/WhoWeHelpPaginate";
import DataFoundations from "../DataFundations/DataFundations";
import './WhoWeHelpFundations.scss';

export function WhoWeHelpFundations() {
    return (
        <div className="WhoWeHelpFundations">
            <p className="WhoWeHelpFundations-text">
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </p>
            <WhoWeHelpPaginate getData={DataFoundations}/>
        </div>
    )
}