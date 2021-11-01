import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Menubar from "../Header/Menubar/Menubar";
import "./Login.css";
import googleImg from "../../assets/download.png";
// login form
const Login = () => {
  const {
    setUser,
    setError,
    setEmail,
    setPassword,
    error,
    signInWithGoogle,
    loginWithEmailPassword,
  } = useAuth();
  // needed things imported
  const location = useLocation();
  const redirect_url = location.state?.from || "/home"; //conditional route
  const history = useHistory();
  // google login
  const handleGoogleLogin = () => {
    signInWithGoogle().then((result) => {
      history.push(redirect_url);
    });
  };

  // get email and password
  const userEmailHandeler = (e) => {
    setEmail(e.target.value);
  };
  const userPasswordHandeler = (e) => {
    setPassword(e.target.value);
  };
  // login with email and password handeler
  const emailPasswordloginHandeler = (e) => {
    e.preventDefault();
    loginWithEmailPassword()
      .then((result) => {
        // Signed in
        setUser(result.user);
        history.push(redirect_url);
        setError("Congratulation..!");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    // login form
    <div>
      <Menubar />
      <div className="login-form row my-5">
        <h2 className="login-title fw-bold ms-5">Login</h2>
        <form onSubmit={emailPasswordloginHandeler}>
          <input
            required
            onBlur={userEmailHandeler}
            className="mt-2 p-2"
            type="email"
            placeholder="Email"
          />
          <br />
          <input
            required
            onBlur={userPasswordHandeler}
            className="mt-2 p-2"
            type="password"
            placeholder="Password"
          />
          <br />

          <input
            value="Login"
            className="btn fs-4  mt-3 w-50 my-4 login-btn"
            type="submit"
          />
        </form>
        <p>
          New to Advanture?<Link to="/register">Create Account</Link>
        </p>
        {/* catch error */}

        <div className="ms-5">-----------or-----------</div>
        <div className="google-signIn">
          {/* google sign in */}
          <button onClick={handleGoogleLogin} className="btn google-btn ms-2 my-2 px-4">
            <img
              src={googleImg}
              alt=""
            />{" "}
            Sign in With Google
          </button>
          <p className="text-success fw-bold mt-3"> {error}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
