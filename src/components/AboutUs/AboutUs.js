import {AboutUsText} from "../AboutUsText/AboutUsText";
import ImageAboutUs from '../../assets/People.jpg';
import './AboutUs.scss';

export function AboutUs() {
    return (
        <div className="AboutUs">
            <AboutUsText />
            <img
                className='AboutUs-image'
                src={ImageAboutUs}
                alt="Image People"
            />
        </div>
    )
}