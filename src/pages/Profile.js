import React, {useEffect} from 'react';
import {Button, Card, Container} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import Avatar from "@mui/material/Avatar";
import {getInitials} from "../utils/get-initials";

const Profile = () => {
    const {currentUser} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(currentUser.providerData)
    }, [])


    return (
        <>
            <Container
                className="d-flex align-items-center justify-content-center"
                style={{minHeight: "100vh"}}
            >
                <div className="w-100" style={{maxWidth: "400px"}}>
                    <Card>
                        <Card.Body>


                            <h2 className="text-center mb-4">Profile</h2>

                            <Container
                                className="d-flex align-items-center justify-content-center"
                            >
                                <Avatar
                                    src={currentUser.providerData[0].photoURL}
                                    sx={{width: 64, height: 64}}
                                >
                                    {getInitials(currentUser.providerData[0].displayName)}
                                </Avatar>
                            </Container>
                            <br/>
                            <strong>Email: </strong>{currentUser.providerData[0].email} <br/>
                            <strong>Name: </strong>{currentUser.providerData[0].displayName} <br/>
                            <strong>Provider: </strong>{currentUser.providerData[0].providerId} <br/>
                            <Link to="/settings" className="btn btn-primary w-100 mt-3">
                                Update Profile
                            </Link>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        <Button variant="link" onClick={() => navigate("/")}>Cancel</Button>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Profile;
