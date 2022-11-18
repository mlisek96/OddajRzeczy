import {WhoWeHelpOneLine} from "../WhoWeHelpOneLine/WhoWeHelpOneLine";
import {ButtonPage} from "../ButtonPage/ButtonPage";
import {WhoWeHelpLastLine} from "../WhoWeHelpLastLine/WhoWeHelpLastLine";
import './WhoWeHelpCollection.scss';

export function WhoWeHelpCollection() {
    return (
        <div className="WhoWeHelpFundations">
            <p className="WhoWeHelpFundations-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className="WhoWeHelpFundations-lines">
                <WhoWeHelpOneLine
                    header={'Zbiórka “Lorem Ipsum 1”'}
                    description={'Quis varius quam quisque id diam vel quam elementum pulvinar.'}
                    scope={'Egestas, sed, tempus'}
                />
                <WhoWeHelpOneLine
                    header={'Zbiórka “Lorem Ipsum 2”'}
                    description={'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.'}
                    scope={'Ut, aliquam, purus, sit, amet'}
                />
                <WhoWeHelpLastLine
                    header={'Zbiórka “Lorem Ipsum 3”'}
                    description={'Scelerisque in dictum non consectetur a erat nam.'}
                    scope={'Mi, quis, hendrerit, dolor'}
                />
            </div>
            {/*<div className="WhoWeHelpFundations-pages">*/}
            {/*    <ButtonPage buttonNumber={1} />*/}
            {/*    <ButtonPage buttonNumber={2} />*/}
            {/*    <ButtonPage buttonNumber={3} />*/}
            {/*</div>*/}
        </div>
    )
}