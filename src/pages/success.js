import React from "react"
import Layout from "../components/layout"
import Link from "gatsby-link"

const Success = props => (
  <Layout>
    <div className="successpage">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <p>Your information has been submitted Successfully.</p>
            <Link to="/" className="backtohome">
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Success
