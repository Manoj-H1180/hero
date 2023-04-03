import { Component } from "react";
import { RxDashboard } from "react-icons/rx";
import { MdAnalytics, MdWeb, MdMiscellaneousServices } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FiMonitor, FiActivity } from "react-icons/fi";
import Cookies from "js-cookie";
import "./index.css";

class Dashboard extends Component {
  render() {
    const token = Cookies.get("jwt_token");
    if (token === undefined) {
      window.location.href = "/login";
    }
    return (
      <div className="dash-container">
        <div className="dashboard-sidebar">
          <img
            alt="d-logo"
            className="d-logo"
            src="https://res.cloudinary.com/dy1lfg1dp/image/upload/v1679980007/hostinghero_logo_d1593l.png"
          />
          <ul className="sidebar-ul">
            <li className="sidebar-list">
              <RxDashboard className="sidebar-icon" /> Dashboard
            </li>
            <li className="sidebar-list">
              <MdAnalytics className="sidebar-icon" /> Analytics
            </li>
            <li className="sidebar-list">
              <CgWebsite className="sidebar-icon" /> Sites
            </li>
            <li className="sidebar-list">
              <FaSearch className="sidebar-icon" /> Explore Domain
            </li>
            <li className="sidebar-list">
              <MdWeb className="sidebar-icon" /> Website Builder
            </li>
            <li className="sidebar-list">
              <MdMiscellaneousServices className="sidebar-icon" /> Manage
              Service
            </li>
            <li className="sidebar-list">
              <FiMonitor className="sidebar-icon" /> Monitoring
            </li>
            <li className="sidebar-list">
              <FiActivity className="sidebar-icon" /> Activity Log
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Dashboard;
