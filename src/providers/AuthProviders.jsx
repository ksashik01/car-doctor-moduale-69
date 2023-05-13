import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../assets/firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProviders = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setloading] = useState(true);


    const createUser = (email, password) =>{
        setloading(true)
        return createUserWithEmailAndPassword (auth, email, password);
    }

    const signIn = (email, password) =>{
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

const logOut = auth =>{
    return signOut(auth)
}









    useEffect (() =>{
        const unsubscribe = onAuthStateChanged (auth, currentuser =>{

            setUser(currentuser);
            console.log ('current user',currentuser );
            setloading(false);

        });

        return () =>{
            return unsubscribe
        }

    },[])





    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut

    }


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProviders;