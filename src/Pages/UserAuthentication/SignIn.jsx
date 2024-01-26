import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Global Conext/AuthenticationContext";
import { auth, onAuthStateChanged } from "../../Firebase";
import googleImg from "../../Images/google-svgrepo-com.svg";
import "./Auth.css";

const USER_REGX =
  /^(?:[a-zA-Z][A-Za-z0-9-_]{3,23}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const PWD_REGX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{4,24}$/;

const SignIn = () => {
  const userRefFocus = useRef();
  const errorRefAlert = useRef();
  const navigate = useNavigate();

  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [validUsernameOrEmail, setValidUsernameOrEmail] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");
  // const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const { signInHandleSubmit, SignInWithGoogle, user, userData } =
    useAuthContext();

  useEffect(() => {
    userRefFocus.current.focus();
  }, []);

  useEffect(() => {
    const checkUserRules = USER_REGX.test(usernameOrEmail);
    console.log(checkUserRules);
    console.log(usernameOrEmail);
    setValidUsernameOrEmail(checkUserRules);
  }, [usernameOrEmail]);

  useEffect(() => {
    const checkPwdRules = PWD_REGX.test(pwd);
    console.log(checkPwdRules);
    console.log(pwd);
    setValidPwd(checkPwdRules);
  }, [pwd]);

  useEffect(() => {
    setErrorMsg("");
  }, [usernameOrEmail, pwd]);

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
        setLoading(false);
      } else {
        setLoading(false);
        navigate("/SignIn");
      }
    });
  }, [navigate]);

  //Sign in handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const v1 = USER_REGX.test(usernameOrEmail);
    const v2 = PWD_REGX.test(pwd);
    if (v1 && v2) {
      signInHandleSubmit(usernameOrEmail, pwd);
      setLoading(true);
      // navigate("/");
    } else {
      setLoading(false);
      // navigate("/SignIn");
      alert("Invid Username/Email/Password");
    }
  };


  // console.log("user", user);
  // console.log("userData", userData);

  return (
    <section className="Register-card">
      <p
        className={errorMsg ? "errorAlert" : "offscreen"}
        aria-live="assertive"
        ref={errorRefAlert}
      >
        {errorMsg}
      </p>

      <article className="Card">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          {/* UserName/Email */}
          <div className="input-container">
            <label htmlFor="Username or Email">Username or Email:</label>
            <input
              type="text"
              placeholder="Username or Email"
              id="username or email"
              name="username_or_email"
              required
              autoComplete="off"
              aria-invalid={validUsernameOrEmail ? "false" : "true"}
              aria-describedby="user/email"
              // onFocus={() => setFocusUsernameOrEmail(true)}
              // onBlur={() => setFocusUsernameOrEmail(false)}
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              ref={userRefFocus}
            />
          </div>
          {/* password */}
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="Password"
              required
              id="password"
              aria-describedby="pwdnote"
              aria-invalid={validPwd ? "false" : "true"}
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
          <button
            className="Reg-btn"
            disabled={!validUsernameOrEmail || !validPwd ? true : false}
            type="submit"
          >
            Sign In
          </button>
        </form>

        <div className="Sign-In-Google" onClick={SignInWithGoogle}>
          <div className="google-img">
            <img src={googleImg} alt="" />
          </div>
          <div className="btn-text">Sign in with Google</div>
        </div>
      </article>
      <div className="route-login-page">
        <p>Need an Account?</p>
        <NavLink to="/SignUp">
          <span>Sign Up here</span>
        </NavLink>
      </div>
    </section>
  );
};

export default SignIn;
