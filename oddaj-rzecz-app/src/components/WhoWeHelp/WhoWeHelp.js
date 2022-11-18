import {DecorationHeader} from "../DecorationHeader/DecorationHeader";
import {WhoWeHelpMenu} from "../WhoWeHelpMenu/WhoWeHelpMenu";
import {WhoWeHelpFundations} from "../WhoWeHelpFundations/WhoWeHelpFundations";
import {WhoWeHelpOrganization} from "../WhoWeHelpOrganization/WhoWeHelpOrganization";
import {WhoWeHelpCollection} from "../WhoWeHelpCollection/WhoWeHelpCollection";
import './WhoWeHelp.scss';

export function WhoWeHelp() {
    return (
        <div className="WhoWeHelp">
            <DecorationHeader headerText={'Komu pomagamy?'}/>
            <WhoWeHelpMenu/>
            <WhoWeHelpFundations />
            {/*<WhoWeHelpOrganization />*/}
            {/*<WhoWeHelpCollection />*/}
        </div>
    )
}