import React from "react";

import './sign-in-and-up.scss';

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

const SignInAndUp = () => (
    <div className='sign-in-and-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndUp;