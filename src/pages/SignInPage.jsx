import React from "react";
import './styles/SignInPage.styles.scss';
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const SignInPage = () => {
    return <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
};

export default SignInPage;
