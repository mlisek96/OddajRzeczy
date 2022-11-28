import {WhoWeHelpMenuButton} from "../WhoWeHelpMenuButton/WhoWeHelpMenuButton";
import './WhoWeHelpMenu.scss';

export function WhoWeHelpMenu({active, setActive}) {
    return (
        <div className="WhoWeHelpMenu">
            <WhoWeHelpMenuButton
                buttonText={'Fundacjom'}
                onClick={() => setActive('Foundations')}
                active={active}
                // active={'Foundations'}
            />
            <WhoWeHelpMenuButton
                buttonText={'Organizacjom pozarządowym'}
                onClick={() => setActive('Organization')}
                active={active}
                // active={'Organization'}
            />
            <WhoWeHelpMenuButton
                buttonText={'Lokalnym zbiórkom'}
                onClick={() => setActive('Collection')}
                active={active}
                // active={'Collection'}
            />
        </div>
    )
}