import {WhoWeHelpMenuButton} from "../WhoWeHelpMenuButton/WhoWeHelpMenuButton";
import './WhoWeHelpMenu.scss';

export function WhoWeHelpMenu({active, setActive}) {
    return (
        <div className="WhoWeHelpMenu">
            <WhoWeHelpMenuButton
                buttonText={'Fundacjom'}
                onClick={() => setActive('Foundations')}
                active={active}
                style={{
                    borderColor: active === 'Foundations' ? "#3C3C3C" : "transparent"
                }}
            />
            <WhoWeHelpMenuButton
                buttonText={'Organizacjom pozarządowym'}
                onClick={() => setActive('Organization')}
                active={active}
                style={{
                    borderColor: active === 'Organization' ? "#3C3C3C" : "transparent"
                }}
            />
            <WhoWeHelpMenuButton
                buttonText={'Lokalnym zbiórkom'}
                onClick={() => setActive('Collection')}
                active={active}
                style={{
                    borderColor: active === 'Collection' ? "#3C3C3C" : "transparent"
                }}
            />
        </div>
    )
}