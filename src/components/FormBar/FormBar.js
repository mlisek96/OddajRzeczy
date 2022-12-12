import './FormBar.scss';

export function FormBar({header, text}) {
    return (
        <div className="FormBar">
            <div className="FormBar-content">
                <h2
                    className="FormBar-content__header"
                >
                    {header}
                </h2>
                <p
                    className="FormBar-content__text"
                >
                    {text}
                </p>
            </div>
        </div>
    )
}