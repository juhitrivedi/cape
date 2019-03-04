import React from "react"
import Template from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone, faHome } from "@fortawesome/free-solid-svg-icons"

const Contact = props => (
  <Template>
    <div className="container contacts">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1 className="contactTitle">Write us</h1>
          <p className="subTitle">We would love to meet you!</p>
        </div>
        <div className="col-lg-8 col-md-12">
          <form
            className="contactForm"
            name="contact"
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />

            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="6" required />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Clear" />
              </li>
            </ul>
          </form>
        </div>
        <div className="col-lg-4 col-md-12">
          <section className="conatctSplit">
            <section>
              <div className="contact-method">
                <span className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <h3>Email</h3>
                <a href="#">info@example.com</a>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <h3>Phone</h3>
                <span>(000) 000-0000 000000</span>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon">
                  <FontAwesomeIcon icon={faHome} />
                </span>
                <h3>Address</h3>
                <span>
                  1234 Somewhere Road #1234
                  <br />
                  Nashville, TN 00000
                  <br />
                  U.S.A
                </span>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  </Template>
)

export default Contact
