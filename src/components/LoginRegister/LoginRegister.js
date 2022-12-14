import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";
import {ButtonLogInRegisterSmall} from "../ButtonLogInRegisterSmall/ButtonLogInRegisterSmall";
import './LoginRegister.scss';

export function LoginRegister() {
    const [error, setError] = useState('')
    const {currentUser, logout} = useAuth()
    const navigate = useNavigate()

    const handleLogout = async (event) => {
        try {
            setError('')
            await logout()
            navigate('/wylogowano')
        } catch (event){
            setError('Failed to log out')
        }
    }

    const bttnChange = () => {
        if (currentUser) {
            return <>
                <p className='Login-message'>
                    Cześć {currentUser.email}!
                </p>
                <ButtonLogInRegisterSmall
                    buttonText={'Oddaj rzeczy'}
                    linkTo={'/formularz'}
                    style={{
                        borderColor: "#FAD648",
                    }}
                />
                <ButtonLogInRegisterSmall
                    buttonText={'Wyloguj'}
                    linkTo={'/wylogowano'}
                    onClick={handleLogout}
                />
            </>
        } else {
            return <>
                <ButtonLogInRegisterSmall
                    buttonText={'Zaloguj'}
                    linkTo={'/logowanie'}
                />
                <ButtonLogInRegisterSmall
                    buttonText={'Załóż konto'}
                    linkTo={'/rejestracja'}
                    style={{
                        borderColor: "#FAD648",
                    }}
                />
            </>
        }
    }

    return (
        <ul className="Login">
            {bttnChange()}
        </ul>
    )
}