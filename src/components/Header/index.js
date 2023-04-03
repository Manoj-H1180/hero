import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import "./index.css";

const Header = (props) => {
  const { domain, home } = props;
  const [isLoading, setIsLoading] = useState(true);
  const isActive = domain ? "active-tab" : "";
  const isHomeActive = home ? "active-tab" : "";

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <nav className="nav-container">
      <section>
        <Link to="/">
          <img
            alt="website logo"
            className="w-logo"
            src="https://res.cloudinary.com/dy1lfg1dp/image/upload/v1679306644/default_fn5gj2.png"
          />
        </Link>
      </section>
      <ul className="nav-list">
        <Link className="link" to="/">
          <button className={isHomeActive}>Home</button>
        </Link>
        <Link className={`link ${isActive}`} to="/domain">
          <button className={isActive}>Domain</button>
        </Link>
        <div className="dropdown">
          <button>
            Products <MdOutlineKeyboardArrowDown className="nav-icon" />
            <MdKeyboardArrowUp className="nav-icon01" />
          </button>
          <div className="dropdown-content">
            <div>
              <Link className="li-link" to="/cloud">
                <button className="dropBtn">
                  <img
                    alt="icon"
                    className="li-icon"
                    src="https://res.cloudinary.com/dy1lfg1dp/image/upload/v1680232910/cloud_hhagzh.png"
                  />
                  Cloud Hosting
                </button>
              </Link>
              <Link className="li-link" to="/server">
                <button className="dropBtn">
                  <img
                    alt="icon"
                    className="li-icon"
                    src="https://res.cloudinary.com/dy1lfg1dp/image/upload/v1680233501/server_ga2mmj.png"
                  />
                  Servers
                </button>
              </Link>
              <Link className="li-link" to="/managed-hosting">
                <button className="dropBtn">
                  <img
                    alt="icon"
                    className="li-icon"
                    src="https://res.cloudinary.com/dy1lfg1dp/image/upload/v1680233827/app-development_oh84bx.png"
                  />
                  Managed Hosting
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Link className="link" to="/">
          <button>Plans</button>
        </Link>
        <Link className="link" to="/">
          <button>Blog</button>
        </Link>
      </ul>
      <div className="pubbtn-section">
        <Link to="/sign-up">
          <button
            className={isLoading ? "publish-btn-loading" : "publish-btn"}
            type="button"
          >
            Publish your site
          </button>
        </Link>
      </div>
      <div className="hamburger-section">
        <RxHamburgerMenu className="hamburger-icon" />
      </div>
    </nav>
  );
};

export default Header;
