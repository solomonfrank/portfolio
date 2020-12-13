import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

const PageLayout = (props) => {
  const toggleSideBar = () => {
    
    const asideNode = document.querySelector(".nav-right");

    if (asideNode.classList.contains("open")) {
      asideNode.classList.remove("open");
    } else {
      asideNode.classList.add("open");
    }
  }
  return (
    <>
      <header id="header" className="header header--fixed">
        <div className="container">
          <div className="nav-wrapper align-items-center">
            <nav className="nav-left">
              <div class="header__logo">
                <Link to="#main">Rock.E</Link>
              </div>
            </nav>
            <ul class="icon" onClick={()=>toggleSideBar()}>
              <li class="burger-list">
                <div id="burger">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </div>
              </li>
            </ul>

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
      <footer>
        <div className="container">
          <ul className="header__menu collapse">
            
            <li className="header__menu-item">
              <Link>LinkedIn</Link>
            </li>
            <li className="header__menu-item">
              <Link>GitHub</Link>
            </li>
          </ul>
          <p> All Right Reserved. &copy; 2020 Rock</p>
        </div>
      </footer>
    </>
  );
};

export default PageLayout;
