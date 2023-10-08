import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

//USER NAMES AND PASSWORD RULES
const EMAIL_REGX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PWD_REGX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{4,24}$/;

const SignIn = () => {
  const userRefFocus = useRef();
  const errorRefAlert = useRef();

  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [focusUsernameOrEmail, setFocusUsernameOrEmail] = useState(false);
  const [validUsernameOrEmail, setValidUsernameOrEmail] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    userRefFocus.current.focus();
  }, []);

  useEffect(() => {
    setErrorMsg("");
  }, [usernameOrEmail, pwd]);

  // useEffect(()=>{

  // })

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsernameOrEmail("");
    setPwd("");
  };
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
              required
              autoComplete="off"
              aria-invalid={validUsernameOrEmail ? "false" : "true"}
              aria-describedby="user/email"
              onFocus={() => focusUsernameOrEmail(true)}
              onBlur={() => focusUsernameOrEmail(false)}
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              ref={userRefFocus}
            />
          </div>
          {/* password */}
          <div className="input-container">
            <label htmlFor="password">
              Password:
              {/* <span className={validPwd ? "valid" : "hide"}>
                <HiCheckCircle className="checkMark" />
              </span>
              <span className={validPwd || !pwd ? "hide" : "invalid"}>
                <HiXCircle className="xMark" />
              </span> */}
            </label>
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
            // disabled={
            //   !validFirstName ||
            //   !validLastName ||
            //   !validUser ||
            //   !validEmail ||
            //   !validPwd ||
            //   !validMatch
            //     ? true
            //     : false
            // }
          >
            Sign In
          </button>
        </form>
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
