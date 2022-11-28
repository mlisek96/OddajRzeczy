import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import './WhoWeHelpMenuButton.scss';


export function WhoWeHelpMenuButton({linkTo, buttonText, onClick, active}) {
    const [activeClass, setActiveClass] = useState('WhoWeHelpMenuButton')

    useEffect(() => {
        if (active === 'Foundations') {
            setActiveClass(`WhoWeHelpMenuButton active`)
        } else if (active === 'Organization') {
            setActiveClass(`WhoWeHelpMenuButton active`)
        } else if (active === 'Collection') {
            setActiveClass(`WhoWeHelpMenuButton active`)
        }
    }, [])

    return (
        <div
            className={activeClass}
            // className={'WhoWeHelpMenuButton'}
            // className={active === 'Foundations' ? `WhoWeHelpMenuButton active` : "WhoWeHelpMenuButton"}
            onClick={onClick}
            // style={{
            //     border: active === 'Foundations' ? "1px solid black" : "1px solid transparent"
            // }}
        >
            <Link
                className='WhoWeHelpMenuButton__link'
                to={linkTo}
            >
                {buttonText}
            </Link>
        </div>
    )
}