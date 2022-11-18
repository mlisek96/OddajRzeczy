import './SimpleStepsGroup.scss';

export function SimpleStepsGroup({groupImage, groupHeader, groupDescription}) {
    return (
        <ul className="SimpleStepsGroup">
            <li>
                <img src={groupImage} alt="step's image" className="SimpleStepsGroup-image"/>
            </li>
            <li>
                <h4 className="SimpleStepsGroup-header">
                    {groupHeader}
                </h4>
            </li>
            <li>
                <div className="SimpleStepsGroup-border" />
            </li>
            <li>
                <p className="SimpleStepsGroup-text">
                    {groupDescription}
                </p>
            </li>
        </ul>
    )
}