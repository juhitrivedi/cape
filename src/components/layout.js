import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import "bootstrap/dist/css/bootstrap.css"
import "./base.css"

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Header /> {children} <Footer />
      </div>
    )
  }
}

export default Template

export const pageQuery = graphql`
  query IndexQuery {
    allContentfulBlog(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          author
          publishDate(formatString: "MMMM Do, YYYY")
          heroImage {
            file {
              url
            }
          }
          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
