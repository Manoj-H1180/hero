import { Component } from "react";
import Cookies from "js-cookie";

class Dashboard extends Component {
  render() {
    const token = Cookies.get("jwt_token");
    if (token === undefined) {
      window.location.href = "/login";
    }
    return (
      <div className="das-container">
        <h1>Dashboard Page</h1>
      </div>
    );
  }
}

export default Dashboard;
