import { useState } from "react";
import { BiSearchAlt, BiMessageDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { CgProfile } from "react-icons/cg";
import "./index.css";

import React from "react";

const Navbar = (props) => {
  const { dashboard } = props;
  const [open, setOpen] = useState(false);

  function handleLogout() {
    Cookies.remove("jwt_token");
    Cookies.remove("id");
    window.location.reload();
  }

  const ActiveDashboard = dashboard ? "active-li" : "";
  return (
    <div className="nav-container">
      <header className="nav-header">
        <div>
          <img
            alt="website logo"
            className="nav-logo"
            src="https://res.cloudinary.com/dy1lfg1dp/image/upload/v1680514698/cover_pl0m0f.png"
          />
        </div>
        <ul className="nav-ul">
          <li className={`nav-li ${ActiveDashboard}`}>Dashboard</li>
          <li className="nav-li">Marketplace</li>
          <li className="nav-li">Hosting</li>
          <li className="nav-li">Domains</li>
        </ul>
        <div className="nav-account-section">
          <BiSearchAlt className="d-nav-icon" />
          <BiMessageDetail className="d-nav-icon" />
          {/* <img className="profile-img" alt="profile" src="" /> */}

          <div className="user" onClick={() => setOpen(!open)}>
            <CgProfile className="d-nav-icon" />
            {/* <span>{currentUser.username}</span> */}
            {open && (
              <div className="options">
                <Link className="d-li-link" to="/account">
                  <span>Account</span>
                </Link>
                <Link className="d-li-link" to="/add">
                  <span>Community</span>
                </Link>

                <Link className="d-li-link" to="/orders">
                  <span>Orders</span>
                </Link>

                <span onClick={handleLogout} className="logoutBtn">
                  Logout
                </span>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
