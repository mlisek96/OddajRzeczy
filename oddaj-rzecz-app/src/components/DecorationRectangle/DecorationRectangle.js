import './DecorationRectangle.scss';

export function DecorationRectangle({header, text}) {
    return (
        <div className="DecorationRectangle">
            <h3 className="DecorationRectangle-header">{header}</h3>
            <p className="DecorationRectangle-text">{text}</p>
        </div>
    )
}