import React, {createContext, useContext, useEffect, useState} from 'react';
import {auth} from '../config/firebase';
import { getAuth } from "firebase/auth";

const auth1 = getAuth();
const user = auth1.currentUser;


const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const resetPassword = (email) => {
        return auth.sendPasswordResetEmail(email);
    }

    const updateEmail = (email) => {
        return currentUser.updateEmail(email);
    }

    const updatePassword = (password) => {
        return currentUser.updatePassword(password);
    }

    const logout = () => {
        return auth.signOut();
    }

    const socialLogin = (provider) => {
        return auth
            .signInWithPopup(provider)
            .then((res) => {
                console.log(res.user)
                return res.user
            }).catch((er) => {
                return er
            })
    };


    useEffect(() => {

        if (user !== null) {
            user.providerData.forEach((profile) => {
                console.log("Sign-in provider: " + profile.providerId);
                console.log("  Provider-specific UID: " + profile.uid);
                console.log("  Name: " + profile.displayName);
                console.log("  Email: " + profile.email);
                console.log("  Photo URL: " + profile.photoURL);
            });
        }


        return auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        socialLogin
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
