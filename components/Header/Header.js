import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container headerContainer">
          <a className="navbar-brand" href="index.html">
            <img src="./assets/images/logo.png" alt="NFTLUB" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <img src="./assets/images/burgerMenu.png" alt="Menu" />
            </span>
            <span className="">
              <img src="./assets/images/burgerMenu.png" alt="Menu" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Create Auction
                </a>
              </li>
              <li className="nav-item">
                <a className="connectBtn" href="">
                  Connect
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
