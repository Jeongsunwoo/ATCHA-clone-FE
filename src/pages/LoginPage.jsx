import React from "react";
import { GlobalStyles } from '../styles/global-styles';
import LoginForm from "../design_ex/findPassword";
// import SignupForm from "../design_ex/findPassword";
// import FindPassword from "../design_ex/findPassword";
function LoginPage() {
  return (
    <>
      <div>login</div>
        {GlobalStyles}
        <LoginForm />
        {/* <SignupForm/>*/}
        {/* <FindPassword/>  */}
    </>
    );
}

export default LoginPage;
