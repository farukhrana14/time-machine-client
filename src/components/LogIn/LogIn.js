import React, { useContext, useState } from "react";
import google from "../../images/googleIcon.png";
import { UserContext } from "../../App";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import "./LogIn.css";
import { useHistory, useLocation } from "react-router";

const LogIn = () => {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(false);

  //Context API consume
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  //State and Location for ProtectedRoute
  const history = useHistory();
  const location = useLocation();
  let {from} = location.state || {from: {pathname: '/'}};


  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  //Google Sign in
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const userResponse = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
          success: true,
        };

        setUser(userResponse);
        setLoggedInUser(userResponse);
        history.replace(from);

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorMessage = error.message;
        setError(errorMessage);
        console.log(error);
      });
  };


  return (
    <div className="sign-in-div">
      <div onClick={handleGoogleSignIn} className="google-sign-in">
        <div className="google-img">
          <img src={google} alt="" />
        </div>

        <div className="google-text">
          <p>Continue with Google</p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
