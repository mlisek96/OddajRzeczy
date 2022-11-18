import './WhoWeHelpLastLine.scss';

export function WhoWeHelpLastLine({header, description, scope}) {
    return (
        <div className="WhoWeHelpLastLine">
            <div>
                <h5 className='WhoWeHelpLastLine-header'>{header}</h5>
                <p className='WhoWeHelpLastLine-description'>{description}</p>
            </div>
            <p className='WhoWeHelpLastLine-scope'>{scope}</p>
        </div>
    )
}