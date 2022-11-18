import {WhoWeHelpMenuButton} from "../WhoWeHelpMenuButton/WhoWeHelpMenuButton";
import './WhoWeHelpMenu.scss';

export function WhoWeHelpMenu() {
    return (
        <div className="WhoWeHelpMenu">
            <WhoWeHelpMenuButton buttonText={'Fundacjom'}/>
            <WhoWeHelpMenuButton buttonText={'Organizacjom pozarządowym'}/>
            <WhoWeHelpMenuButton buttonText={'Lokalnym zbiórkom'}/>
        </div>
    )
}