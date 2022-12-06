import {createContext, useContext, useEffect, useState} from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth"
import {auth} from "../config/firebase";

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}
export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState({})
    const [loading, setLoading] = useState(true)


    //general signUp function
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //general logIn function
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //general logOut function
    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider
            value={{currentUser, loading, signup, login, logout}
        }>
            {!loading && children}
        </AuthContext.Provider>
    )
}