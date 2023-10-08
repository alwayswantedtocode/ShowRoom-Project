import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiCheckCircle, HiXCircle } from "react-icons/hi";
import { BiInfoCircle } from "react-icons/bi";
import { IoAlertCircle } from "react-icons/io5";

//USER NAMES AND PASSWORD RULES
const NAME_REGX = /^[a-zA-Z-]{3,23}$/;
const USER_REGX = /^[a-zA-Z][A-Za-z0-9-_]{3,23}$/;
const PWD_REGX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{4,24}$/;

const EMAIL_REGX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//

const Rgistration = () => {
  const userRefFocus = useRef();
  const errorRefAlert = useRef();

  const [firstName, setFirstName] = useState("");
  const [firsNameFocus, setFirstNameFocus] = useState(false);
  const [validFirstName, setvalidFirstName] = useState(false);

  const [lastName, setLastName] = useState("");
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [validLastName, setvalidLastName] = useState(false);

  const [user, setUser] = useState("");
  const [validUser, setValidUser] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  //On logiN
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRefFocus.current.focus();
  }, []);

  useEffect(() => {
    const checkNameRules = NAME_REGX.test(firstName);
    // console.log(checkUserRules);
    // console.log(user);
    setvalidFirstName(checkNameRules);
  }, [firstName]);
  useEffect(() => {
    const checkNameRules = NAME_REGX.test(lastName);
    // console.log(checkUserRules);
    // console.log(user);
    setvalidLastName(checkNameRules);
  }, [lastName]);

  useEffect(() => {
    const checkUserRules = USER_REGX.test(user);
    console.log(checkUserRules);
    console.log(user);
    setValidUser(checkUserRules);
  }, [user]);

  useEffect(() => {
    const checkEmailRules = EMAIL_REGX.test(email);
    console.log(checkEmailRules);
    console.log(email);
    setValidEmail(checkEmailRules);
  }, [email]);

  useEffect(() => {
    const checkPWDRules = PWD_REGX.test(pwd);
    console.log(checkPWDRules);
    console.log(pwd);
    setValidPwd(checkPWDRules);
    const pwdMatch = pwd === matchPwd;
    setValidMatch(pwdMatch);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrorMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //if button enabled with JS hack
    const v1 = USER_REGX.test(user);
    const v2 = EMAIL_REGX.test(email);
    const v3 = PWD_REGX.test(pwd);
    if (!v1 || !v2 || !v3) {
      setErrorMsg("Invalid Entry");
      return;
    }
    console.log(user, pwd);
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <div className="route-login-page">
            <NavLink to="/Signin">
              <span>Login here</span>
            </NavLink>
          </div>
        </section>
      ) : (
        <section className="Register-card">
          <p
            className={errorMsg ? "errorAlert" : "offscreen"}
            aria-live="assertive"
            ref={errorRefAlert}
          >
            {errorMsg}
          </p>

          <article className="Card">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label htmlFor="firstname">
                  First Name:
                  <span className={validFirstName ? "valid" : "hide"}>
                    <HiCheckCircle className="checkMark" />
                  </span>
                  <span
                    className={
                      validFirstName || !firstName ? "hide" : "invalid"
                    }
                  >
                    <HiXCircle className="xMark" />
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  id="firstname"
                  required
                  ref={userRefFocus}
                  autoComplete="off"
                  aria-describedby="uidnote"
                  onFocus={() => setFirstNameFocus(true)}
                  onBlur={() => setFirstNameFocus(false)}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="input-container">
                <label htmlFor="lastname">
                  Last Name:
                  <span className={validLastName ? "valid" : "hide"}>
                    <HiCheckCircle className="checkMark" />
                  </span>
                  <span
                    className={validLastName || !lastName ? "hide" : "invalid"}
                  >
                    <HiXCircle className="xMark" />
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  id="lastname"
                  required
                  autoComplete="off"
                  aria-describedby="uidnote"
                  onFocus={() => setLastNameFocus(true)}
                  onBlur={() => setLastNameFocus(false)}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="input-container">
                <label htmlFor="username">
                  User Name:
                  <span className={validUser ? "valid" : "hide"}>
                    <HiCheckCircle className="checkMark" />
                  </span>
                  <span className={validUser || !user ? "hide" : "invalid"}>
                    <HiXCircle className="xMark" />
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="UserName"
                  id="username"
                  required
                  autoComplete="off"
                  aria-invalid={validUser ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
                <p
                  className={
                    userFocus && user && !validUser
                      ? "popup-alert"
                      : "offscreen"
                  }
                  id="uidnote"
                >
                  <BiInfoCircle
                    className="click-4-info"
                    style={{ color: "3A6EA5" }}
                  />
                  4 to 24 characters <br />
                  Must begin with a letter <br />
                  Letters, nubers,underscores,hyphens allowed
                </p>
              </div>

              <div className="input-container">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  required
                  autoComplete="off"
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="emailAlert">
                  <div className={validEmail ? "validemail" : "hide"}>
                    <IoAlertCircle
                      className="click-4-info"
                      style={{ color: "seagreen" }}
                    />
                    The email you entered is valid
                  </div>
                  <div
                    className={validEmail || !email ? "hide" : "invalidemail"}
                  >
                    <IoAlertCircle
                      className="click-4-info"
                      style={{ color: "firebrick" }}
                    />
                    The email you enter is invalid
                  </div>
                </div>
              </div>

              {/* <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your phone number"
                required
              /> */}

              <div className="input-container">
                <label htmlFor="password">
                  Password:
                  <span className={validPwd ? "valid" : "hide"}>
                    <HiCheckCircle className="checkMark" />
                  </span>
                  <span className={validPwd || !pwd ? "hide" : "invalid"}>
                    <HiXCircle className="xMark" />
                  </span>
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
                <p
                  className={
                    pwdFocus && !validPwd ? "popup-alert" : "offscreen"
                  }
                  id="uidnote"
                >
                  <BiInfoCircle
                    className="click-4-info"
                    style={{ color: "3A6EA5" }}
                  />
                  8 to 24 characters <br />
                  Must include aleast one Uppercase,
                  <br />
                  Lowercase letters,
                  <br /> Atleast a number and a special charater. <br />
                </p>
              </div>

              <div className="input-container">
                <label htmlFor="Confirmpassword">
                  Confirm Password:
                  <span className={validMatch && matchPwd ? "valid" : "hide"}>
                    <HiCheckCircle className="checkMark" />
                  </span>
                  <span
                    className={validMatch || !matchPwd ? "hide" : "invalid"}
                  >
                    <HiXCircle className="xMark" />
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  id="Confirmpassword"
                  aria-describedby="confirmnote"
                  aria-invalid={validMatch ? "false" : "true"}
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  value={matchPwd}
                  onChange={(e) => setMatchPwd(e.target.value)}
                />
                <p
                  className={
                    matchFocus && !validMatch ? "popup-alert" : "offscreen"
                  }
                  id="uidnote"
                >
                  <BiInfoCircle
                    className="click-4-info"
                    style={{ color: "3A6EA5" }}
                  />
                  Must match with password
                </p>
              </div>

              <button
                className="Reg-btn"
                disabled={
                  !validFirstName ||
                  !validLastName ||
                  !validUser ||
                  !validEmail ||
                  !validPwd ||
                  !validMatch
                    ? true
                    : false
                }
              >
                Register
              </button>
            </form>
          </article>
          <div className="route-login-page">
            <p>Already registered?</p>
            <NavLink to="/SignIn">
              <span>Sign In here</span>
            </NavLink>
          </div>
        </section>
      )}
    </>
  );
};

export default Rgistration;
