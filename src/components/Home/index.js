import { Link } from "react-router-dom";
import Header from "../Header";
import Scroll from "../Scroll/SmoothScroll";
import "./index.css";

const Home = () => {
  return (
    <div>
      <Header home />
      <div className="home-container">
        <Scroll />
        <section className="hero-row">
          <div className="hero-section">
            <h1 className="hero-heading">
              A Managed Cloud Hosting Platform Where Teams Can Build.
            </h1>
            <Link to="/sign-up">
              <button type="button" className="getStartBtn">
                Get started today
              </button>
            </Link>
          </div>
        </section>
        <div className="cards-section">
          <div className="heading-section">
            <h1 className="cards-heading">
              Hosting is even better with all these free features.
            </h1>
          </div>
          <div className="cards-container">
            <div className="cards">
              <img
                alt="bandwidth"
                src="https://res.cloudinary.com/dy1lfg1dp/image/upload/v1680163300/bandwidth_jhylyj.png"
                className="card-logo"
              />
              <h3 className="card-heading">Unmetered bandwidth</h3>
              <p className="card-desc">
                Bring in all the traffic you want, we got you
              </p>
            </div>
            <div className="cards">
              <img
                alt="domain"
                className="card-logo"
                src="https://res.cloudinary.com/dy1lfg1dp/image/upload/v1680163564/domain_hphzqi.png"
              />
              <h3 className="card-heading">Domain Registration</h3>
              <p className="card-desc">
                Claim your domain name and get yourself online.
              </p>
            </div>
            <div className="cards">
              <img
                alt="ssl-certificate"
                className="card-logo"
                src="https://res.cloudinary.com/dy1lfg1dp/image/upload/v1680163302/ssl-certificate_x5stis.png"
              />
              <h3 className="card-heading">SSL certificate</h3>
              <p className="card-desc">
                Show your visitors you take security seriously
              </p>
            </div>
            <div className="cards">
              <img
                alt="one-click-connect"
                className="card-logo"
                src="https://res.cloudinary.com/dy1lfg1dp/image/upload/v1680163305/link_m8ab3k.png"
              />
              <h3 className="card-heading">One-click connect</h3>
              <p className="card-desc">
                Integrating your apps cloudn't be any easier.
              </p>
            </div>
          </div>
        </div>
        <div className="rContainer">
          <div>
            <img
              alt="rocket"
              className="r-image"
              src="https://res.cloudinary.com/dy1lfg1dp/image/upload/v1680184632/Frame_1_t9djut.svg"
            />
          </div>
          <div className="r-content-container">
            <div className="content-section">
              <h1 className="content-heading">
                Good reasons to switch to Hostinghero
              </h1>
              <p className="contect-desc">
                HostingHero provides high-quality technologies to make your
                websites run faster. You can choose any PHP version from 5.x to
                7.x and use OPcache and LSCache, which in combination with the
                HTTP / 2 protocol ensures very efficient website performance.
              </p>
            </div>
            <div className="content-box1">
              <div className="box-1">
                <img
                  alt="backup"
                  className="backup-image"
                  src="https://res.cloudinary.com/dy1lfg1dp/image/upload/v1680184966/Frame_2_napp6w.svg"
                />
                <h4 className="backup-title">Backup copies</h4>
                <p className="backup-desc">
                  Very fast web server, which is LiteSpeed, which in combination
                  with OPcache and LSCache, allows for a radical acceleration of
                  the operation of websites.
                </p>
              </div>
              <div className="box-2">
                <img
                  alt="backup"
                  className="backup-image"
                  src="https://res.cloudinary.com/dy1lfg1dp/image/upload/v1680184970/Frame_3_kz6at7.svg"
                />
                <h4 className="backup-title">The faster site</h4>
                <p className="backup-desc">
                  HostingHero gives you the ability to enjoy the benefits of
                  HTTP / 2. You can use resources to load in parallel, and even
                  load them BEFORE the browser asks for them.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="image-section">
          <img
            alt="hero"
            className="hero-image"
            src="https://res.cloudinary.com/dy1lfg1dp/image/upload/v1680186851/Frame_4_mnb2f2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
