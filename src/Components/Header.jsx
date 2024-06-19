import React, { Component } from "react";
import "./home.css"
import logo from "../images/newlogo.svg"
import phone from "../images/phone.svg";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <a href="#home">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <nav>
            <ul>
              <li>
                <a className="nav_links" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="nav_links" href="#about">
                  About Us
                </a>
              </li>
              <li>
                <a className="nav_links" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav_links" href="#offers">
                  Offers
                </a>
              </li>
            </ul>
          </nav>
          <div className="header_contact">
            <img className="icon" src={phone} alt="phone" />
            <p>
              <a href="#contact">Contact</a>
            </p>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
