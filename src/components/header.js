import React, { Component } from "react"
import Link from "gatsby-link"
import logoImg from "../images/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"

export class Header extends Component {
  render() {
    return (
      <section className="header-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-12 text-left">
              <Link to="/" className="brand-logo">
                <img src={logoImg} alt="brand logo" />
              </Link>
            </div>
            <div className="col-lg-8 col-md-12">
              <nav id="main-menu" className="text-center">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about/">About</Link>
                  </li>
                  <li>
                    <Link to="/contact/">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-2 col-md-12">
              <div className="text-right">
                <ul className="social-share list-inline">
                  <li className="list-inline-item">
                    <Link to="/">
                      <span className="icon">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </span>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">
                      <span className="icon">
                        <FontAwesomeIcon icon={faTwitter} />
                      </span>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">
                      <span className="icon">
                        <FontAwesomeIcon icon={faGooglePlusG} />
                      </span>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">
                      <span className="icon">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Header
