import React, { useContext, useState } from 'react';
import "./Login.css"
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';



if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const [user,setUser] = useState({
        isSignedIn: false,
        name: '',
        photo: '',
        email: ''
    })
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    var provider = new firebase.auth.GoogleAuthProvider();
    const googleSignIn = ()=>{
        firebase.auth()
            .signInWithPopup(provider)
            .then((res) => {
                const {displayName, photoURL, email} = res.user;
                    const SignedInUser = {
                        isSignedIn: true,
                        name: displayName,
                        photo: photoURL,
                        email: email
                    }
                    setUser(SignedInUser);
                    setLoggedInUser(SignedInUser);
                    history.replace(from);
                // ...
            }).catch((error) => {
              console.log(error);
            });
    }

    return (
        <>
        <div className="container my-4 d-flex justify-content-center align-items-center">
            <img src="https://i.ibb.co/X3M1MM5/Group-1329.png" height="60px" width="203px" alt=""/>
        </div>
        <div className="loginStyle m-auto d-flex justify-content-center align-items-center">
           <div>
           <h4 className="text-center mb-4">Login With</h4>
            <div>
                <button onClick={googleSignIn} className="fbGoogleLogin mb-2"><img src="https://i.ibb.co/5YTSkQR/google.png"  height="37px" width="37px" alt=""/> Continue With Google</button><br/>
                <p className="text-center">Don't have an account? <span><a href="#">create an account</a></span></p>
            </div>
           </div>
        </div>
    </>
    );
};

export default Login;