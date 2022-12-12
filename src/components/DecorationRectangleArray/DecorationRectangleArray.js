import {DecorationRectangle} from "../DecorationRectangle/DecorationRectangle";
import './DecorationRectangleArray.scss';

export function DecorationRectangleArray() {
    return (
        <div className="DecorationArray">
            <div className="DecorationArray-item">
                <DecorationRectangle
                    header={'1'}
                    text={'Wybierz rzeczy'}
                />
            </div>
            <div className="DecorationArray-item">
                <DecorationRectangle
                    header={'2'}
                    text={'Spakuj je w worki'}
                />
            </div>
            <div className="DecorationArray-item">
                <DecorationRectangle
                    header={'3'}
                    text={'Wybierz fundację'}
                />
            </div>
            <div className="DecorationArray-item">
                <DecorationRectangle
                    header={'4'}
                    text={'Zamów kuriera'}
                />
            </div>
        </div>
    )
}