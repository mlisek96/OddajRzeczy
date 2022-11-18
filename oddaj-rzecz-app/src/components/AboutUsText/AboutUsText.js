import {DecorationHeader} from "../DecorationHeader/DecorationHeader";
import ImageSignature from '../../assets/Signature.svg';
import './AboutUsText.scss';

export function AboutUsText() {
    return (
        <div className="AboutUsText">
            <DecorationHeader headerText={'O nas'} />
            <p className="AboutUsText-paragraph">
                Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
            </p>
            <img className="AboutUsText-image" src={ImageSignature} alt="Signature"/>
        </div>
    )
}