import DecorationImage from '../../assets/Decoration.svg'
import './DecorationHeader.scss'

export function DecorationHeader({headerText}) {
    return (
        <div className='Decoration'>
            <h2 className='Decoration-header'>{headerText}</h2>
            <img className='Decoration-image' src={DecorationImage} alt='decoration image' />
        </div>
    )
}