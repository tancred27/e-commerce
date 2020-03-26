import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./login-and-register.styles.scss";

const SignInPage = () => (
  <div className="login-and-register">
    <div className="card">
      <SignIn />
    </div>
    <div className="card">
      <SignUp />
    </div>
  </div>
);

export default SignInPage;
