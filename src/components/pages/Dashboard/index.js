import { Component } from "react";
import Cookies from "js-cookie";
import "./index.css";
import Navbar from "./Navbar";

export default class Dashboard extends Component {
  state = {
    fName: "",
    lName: "",
    email: "",
    accountCreated: "",
    userId: "",
    isLoading: true,
  };

  componentDidMount() {
    this.getUserDetails();
  }

  getUserDetails = async () => {
    const id = Cookies.get("id");
    const apiUrl = `http://localhost:4000/users/${id}`;
    const options = {
      method: "GET",
    };
    const res = await fetch(apiUrl, options);

    if (res.ok) {
      const data = await res.json();
      const { userData } = data;
      const { createdAt, email, firstname, lastname, _id } = userData;
      const upperCase = firstname[0].toUpperCase() + firstname.slice(1);
      this.setState({
        fName: upperCase,
        lName: lastname,
        userId: _id,
        email: email,
        accountCreated: createdAt,
        isLoading: false,
      });
    }
  };

  render() {
    const { fName, isLoading } = this.state;
    const token = Cookies.get("jwt_token");
    if (token === undefined) {
      window.location.href = "/login";
    }

    return (
      <div className="dashboard-container">
        <Navbar dashboard />
        <div className="">
          <div className="greting-section">
            {isLoading ? (
              <div className="skeleton-line" />
            ) : (
              <h1 className="greetingHeading">Hello {fName}</h1>
            )}
          </div>
        </div>
      </div>
    );
  }
}
