import { Component } from "react";
import { LoginSocialGoogle } from "reactjs-social-login";
import { RiGoogleFill } from "react-icons/ri";
import Cookies from "js-cookie";
import "./index.css";
import { Link } from "react-router-dom";

class Register extends Component {
  state = { firstname: "", lastname: "", email: "", password: "" };

  onChangeFirstName = (e) => {
    this.setState({ firstname: e.target.value });
  };

  onChangeLastName = (e) => {
    this.setState({ lastname: e.target.value });
  };

  onChangeUserEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onChangeUserPassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onRegisterSuccess = (token) => {
    Cookies.set("token", token, { expires: 30 });
    window.location.href = "/dashboard";
  };

  onRegisterFailure = (err) => {
    console.log(err);
  };

  onClickSubmitUserData = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, password } = this.state;
    const apiUrl = "http://localhost:4000/register";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstname, lastname, email, password }),
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    if (response.ok) {
      this.onRegisterSuccess(data.token);
    } else {
      this.onRegisterFailure(data);
    }
  };

  render() {
    return (
      <div className="register-container">
        <div>
          <form className="register-form" onSubmit={this.onClickSubmitUserData}>
            <img
              alt="website log"
              src="https://res.cloudinary.com/dy1lfg1dp/image/upload/v1679898632/favicon_jh2rkp.png"
              className="logo"
            />
            <h1 className="form-heading">Create Account</h1>
            <p className="signInRef">
              Already have an account? <Link to="/login">Sign in</Link>
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
              <button className="g-signup-btn">
                <RiGoogleFill /> Sign up with Google
              </button>
            </LoginSocialGoogle>
            <p className="or">or</p>
            <div className="nameInputRow">
              <input
                type="text"
                placeholder="First Name"
                className="firstName"
                onChange={this.onChangeFirstName}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="lastName"
                onChange={this.onChangeLastName}
              />
            </div>
            <input
              type="email"
              placeholder="Work Email"
              className="userEmail"
              onChange={this.onChangeUserEmail}
            />
            <input
              type="password"
              placeholder="Password"
              className="userPass"
              onChange={this.onChangeUserPassword}
            />
            <button type="submit" className="signUpBtn">
              Sign up with email
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
