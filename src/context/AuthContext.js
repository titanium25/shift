import React, {createContext, useContext, useEffect, useState} from 'react';
import firebase, {auth} from '../config/firebase';
import {getAuth} from "firebase/auth";
import {useDispatch} from "react-redux";
import {initialize} from "../store/toolReducer";

const user = getAuth().currentUser;

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {

    const dispatch = useDispatch();


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
                // console.log(res.user)
                return res.user
            }).catch((er) => {
                return er
            })
    };

    // test
    const createToDo = (title) => {
        const toDoRef = firebase.database().ref('test');
        const todo = {
            title,
            complete: false,

        };
        console.log(title)
        toDoRef.push(todo);
    }


    useEffect(() => {

        if (user !== null) {
            user.providerData.forEach((profile) => {
                console.log("Sign-in provider: " + profile.providerId);
                console.log("  Provider-specific UID: " + profile.uid);
                console.log("  Name: " + profile.displayName);
                console.log("  Email: " + profile.email);
                console.log("  Photo URL: " + profile.photoURL);
            });

            const reference = firebase.database().ref('tools');
            reference.on("value", (snapshot) => {
                dispatch(initialize(snapshot.val()));
            })
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
        socialLogin,
        createToDo,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
