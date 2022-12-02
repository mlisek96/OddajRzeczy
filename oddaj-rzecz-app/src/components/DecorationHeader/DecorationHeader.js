import DecorationImage from '../../assets/Decoration.svg'
import './DecorationHeader.scss'

export function DecorationHeader({headerText, style}) {
    return (
        <div className='Decoration'>
            <h2 className='Decoration-header' style={style}>{headerText}</h2>
            <img className='Decoration-image' src={DecorationImage} alt='decoration image' />
        </div>
    )
}