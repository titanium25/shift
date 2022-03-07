import React, {useEffect} from 'react';
import '../assets/layout.css';
import Signup from "../pages/Signup";
import {AuthProvider} from "../context/AuthContext";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import PrivateRoute from "../config/PrivateRoute";
import ForgotPassword from "../pages/ForgotPassword";
import UpdateProfile from "../pages/UpdateProfile";
import Profile from "../pages/Profile";
import {initialize} from "../store/toolReducer";
import Tools from "../utils/Tools";
import {useDispatch} from "react-redux";



function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initialize(Tools))
        console.log('Initializing...')
    },[])

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path='/' element={<PrivateRoute/>}>
                        <Route exact path='/' element={<Dashboard/>}/>
                    </Route>
                    <Route path='/settings' element={<PrivateRoute/>}>
                        <Route path='/settings' element={<UpdateProfile/>}/>
                    </Route>
                    <Route path='/profile' element={<PrivateRoute/>}>
                        <Route path='/profile' element={<Profile/>}/>
                    </Route>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/forgot-password" element={<ForgotPassword/>}/>
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
