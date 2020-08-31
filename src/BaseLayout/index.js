import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

const PageLayout = (props) => {
  return (
    <div>
      <header id="header" className="header header--fixed">
        <div className="container">
          <div className="nav-wrapper align-items-center">
            <nav className="nav-left">
              <div class="header__logo">
                <Link to="#main">Rock.E</Link>
              </div>
            </nav>
            <nav class="nav-right" id="menu">
              {/* <svg
                className="header__burger d-lg-none"
                data-toggle="collapse"
                data-target="#header-menu"
              >
                <use xlink:href="sprite.svg#list" />
              </svg> */}
              <ul className="header__menu collapse" id="header-menu">
                <li className="header__menu-item">
                  <Link className="header__menu-link nav-link" href="#pricing">
                    Home
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link
                    className="header__menu-link nav-link"
                    href="#portfolio"
                  >
                    About
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link
                    className="header__menu-link nav-link"
                    href="#portfolio"
                  >
                    Blog
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link
                    className="header__menu-link nav-link"
                    href="#portfolio"
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>{props.children}</main>
    </div>
  );
};

export default PageLayout;
