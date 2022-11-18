import './WhoWeHelpOneLine.scss';

export function WhoWeHelpOneLine({header, description, scope}) {
    return (
        <div className="WhoWeHelpOneLine">
            <div>
                <h5 className='WhoWeHelpOneLine-header'>{header}</h5>
                <p className='WhoWeHelpOneLine-description'>{description}</p>
            </div>
            <p className='WhoWeHelpOneLine-scope'>{scope}</p>
        </div>
    )
}