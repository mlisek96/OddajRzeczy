import {useAuth} from "../../context/AuthContext";
import {Decoration} from "../Decoration/Decoration";
import {ButtonBasic} from "../ButtonBasic/ButtonBasic";
import HomeHeroImage from "../../assets/Home-Hero-Image.jpg";
import './Header.scss';

export function Header() {
    const {currentUser} = useAuth()

    return (
        <div className="Header">
            <img className='Header-image' src={HomeHeroImage} alt="Home hero image"/>
            <div className='Header-content'>
                <h1 className='Header-content__text'>Zacznij Pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                <Decoration/>
                <div className='Header-content__buttons'>
                    <ButtonBasic
                        buttonText={'Oddaj rzeczy'}
                        linkTo={'/formularz'}
                    />
                    <ButtonBasic
                        buttonText={'Zorganizuj zbiórkę'}
                        // linkTo={'/logowanie'}
                        linkTo={!currentUser ? '/logowanie' : '/404'}
                    />
                </div>
            </div>
        </div>
    )
}