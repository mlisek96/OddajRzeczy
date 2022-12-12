import {WhoWeHelpPaginate} from "../WhoWeHelpPaginate/WhoWeHelpPaginate";
import DataOrganization from "../DataOrganization/DataOrganization";
import './WhoWeHelpOrganization.scss';

export function WhoWeHelpOrganization() {
    return (
        <div className="WhoWeHelpFundations">
            <p className="WhoWeHelpFundations-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <WhoWeHelpPaginate getData={DataOrganization} />
        </div>
    )
}