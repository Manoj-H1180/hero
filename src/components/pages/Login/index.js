import { Component } from "react";
import { LoginSocialGoogle } from "reactjs-social-login";
import Cookies from "js-cookie";
import { RiGoogleFill } from "react-icons/ri";
import "./index.css";
import { Link } from "react-router-dom";

class Login extends Component {
  state = { email: "", password: "", error_msg: "" };

  onChangeUserEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onChangeUserpassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onLoginSuccess = (token) => {
    Cookies.set("jwt_token", token, { expires: 30 });
    window.location.href = "/dashboard";
  };

  onLoginFailure = (msg) => {
    this.setState({ error_msg: msg });
  };

  onClickLoginFormSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const apiUrl = "http://localhost:4000/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    if (response.ok) {
      this.onLoginSuccess(data.jwt_token);
    } else {
      this.onLoginFailure(data.message);
    }
  };

  responseGoogle = (response) => {
    console.log(response);
  };

  render() {
    const { error_msg } = this.state;
    return (
      <div className="login-container">
        <div className="container">
          <form
            className="form-container"
            onSubmit={this.onClickLoginFormSubmit}
          >
            <img
              alt="website log"
              src="https://res.cloudinary.com/dy1lfg1dp/image/upload/v1679898632/favicon_jh2rkp.png"
              className="logo"
            />
            <h1 className="form-heading">Welcome to Hostinghero</h1>
            <p className="singUpRef">
              Don't have an account? <Link to="/sign-up">Sign up for free</Link>
            </p>
            <LoginSocialGoogle
              client_id={
                "380302030924-6vdsufb59sp74h0bpa1oirmh3ajcf16f.apps.googleusercontent.com"
              }
              scope="openid profile email"
              discoveryDocs="claims_supported"
              access_type="offline"
              onResolve={({ provider, data }) => {
                console.log(provider, data);
              }}
              onReject={(err) => {
                console.log(err);
              }}
            >
              <button className="g-login-btn">
                <RiGoogleFill /> Continue with Google
              </button>
            </LoginSocialGoogle>

            <p className="or">or</p>
            <input
              type="email"
              placeholder="Email"
              className="email-input"
              onChange={this.onChangeUserEmail}
            />
            <input
              type="password"
              placeholder="Password"
              className="password-input"
              onChange={this.onChangeUserpassword}
            />
            <p style={{ color: "red", paddingTop: "10px" }}>{error_msg}</p>
            <button type="submit" className="signInBtn">
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
