import React,{useState,useEffec, useRef} from 'react'

const Rgistration = () => {

   const [user, setUser] = useState("");
   const [validName, setValidName] = useState(false);
   const [userFocus, setUserFocus] = useState(false);

   const [pwd, setPwd] = useState("");
   const [validPwd, setValidPwd] = useState(false);
   const [pwdFocus, setPwdFocus] = useState(false);

   const [matchPwd, setMatchPwd] = useState("");
   const [validMatch, setValidMatch] = useState(false);
   const [matchFocus, setMatchFocus] = useState(false);

   const [errorMsg, setErrorMsg] = useState("");
   const [success, setSuccess] = useState(false);
  return (
    <section className="Register-card">
      <article className="Card">
        <div className="Left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
        <div className="Right">
          <h1>Share X</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem error
            beatae explicabo incidunt.
          </p>
          <span>Have an acount?</span>

          <NavLink to="/login">
            <button>Login</button>
          </NavLink>
        </div>
      </article>
    </section>
  );
}

export default Rgistration