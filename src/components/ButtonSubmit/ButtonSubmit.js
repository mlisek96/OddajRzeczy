import {Link} from "react-router-dom";
import './ButtonSubmit.scss';

export function ButtonSubmit({buttonText, onClick}) {
    return (
        <div
            // className="ButtonSubmit"
            // onClick={onClick}
        >
            {/*<button*/}
            {/*    className='ButtonSubmit__link'*/}
            {/*>*/}
            {/*    {buttonText}*/}
            {/*</button>*/}
            <button
                type="submit"
                className={'ButtonSubmit'}
                onClick={onClick}
            >
                {buttonText}
            </button>
        </div>


    )
}