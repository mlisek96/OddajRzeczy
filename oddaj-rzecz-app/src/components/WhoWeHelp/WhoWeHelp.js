import {useState} from "react";
import {DecorationHeader} from "../DecorationHeader/DecorationHeader";
import {WhoWeHelpMenu} from "../WhoWeHelpMenu/WhoWeHelpMenu";
import {WhoWeHelpFundations} from "../WhoWeHelpFundations/WhoWeHelpFundations";
import {WhoWeHelpOrganization} from "../WhoWeHelpOrganization/WhoWeHelpOrganization";
import {WhoWeHelpCollection} from "../WhoWeHelpCollection/WhoWeHelpCollection";
import './WhoWeHelp.scss';

export function WhoWeHelp() {
    const [active, setActive] = useState('Foundations')

    return (
        <div className="WhoWeHelp">
            <DecorationHeader headerText={'Komu pomagamy?'}/>
            <WhoWeHelpMenu setActive={setActive} active={active}/>
            <div>
                {active === 'Foundations' && <WhoWeHelpFundations />}
                {active === 'Organization' && <WhoWeHelpOrganization />}
                {active === 'Collection' && <WhoWeHelpCollection />}
            </div>
        </div>
    )
}