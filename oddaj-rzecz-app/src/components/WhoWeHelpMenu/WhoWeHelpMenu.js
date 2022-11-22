import {WhoWeHelpMenuButton} from "../WhoWeHelpMenuButton/WhoWeHelpMenuButton";
import './WhoWeHelpMenu.scss';

export function WhoWeHelpMenu({setActive}) {
    return (
        <div className="WhoWeHelpMenu">
            <WhoWeHelpMenuButton
                buttonText={'Fundacjom'}
                onClick={() => setActive('Foundations')}
            />
            <WhoWeHelpMenuButton
                buttonText={'Organizacjom pozarządowym'}
                onClick={() => setActive('Organization')}
            />
            <WhoWeHelpMenuButton
                buttonText={'Lokalnym zbiórkom'}
                onClick={() => setActive('Collection')}
            />
        </div>
    )
}