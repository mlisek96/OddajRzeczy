import {SimpleStepsGroup} from "../SimpleStepsGroup/SimpleStepsGroup";
import IconTshirt from '../../assets/Icon-1.svg'
import IconBag from '../../assets/Icon-2.svg'
import IconLoop from '../../assets/Icon-3.svg'
import IconRound from '../../assets/Icon-4.svg'
import './SimpleStepsBackground.scss'

export function SimpleStepsBackground() {
    return (
        <div className="SimpleStepsBackground">
            <ul className="SimpleStepsBackground__group">
                <li>
                    <SimpleStepsGroup
                        groupImage={IconTshirt}
                        groupHeader={'Wybierz rzeczy'}
                        groupDescription={'ubrania, zabawki, sprzęt i inne'}
                    />
                </li>
                <li>
                    <SimpleStepsGroup
                        groupImage={IconBag}
                        groupHeader={'Spakuj je'}
                        groupDescription={'skorzystaj z worków na śmieci'}
                    />
                </li>
                <li>
                    <SimpleStepsGroup
                        groupImage={IconLoop}
                        groupHeader={'Zadecyduj komu chcesz pomóc'}
                        groupDescription={'wybierz zaufane miejsce'}
                    />
                </li>
                <li>
                    <SimpleStepsGroup
                        groupImage={IconRound}
                        groupHeader={'Zamów kuriera'}
                        groupDescription={'kurier przyjedzie w dogodnym terminie'}
                    />
                </li>
            </ul>
        </div>
    )
}