import React from "react"
import get from "lodash/get"
import Helmet from "react-helmet"
import Template from "../components/layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

class indexPage extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const posts = get(this, "props.data.allContentfulBlog.edges")

    return (
      <Template>
        <Helmet title={siteTitle} />
        <div className="indexpage">
          <div className="right-section blog-post">
            <div className="container">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  {posts.map(({ node }) => {
                    return (
                      <article className="blog-listing" key={node.slug}>
                        <div className="entry-meta-content">
                          <h2 className="entry-title">
                            <Link to={node.slug}>{node.title}</Link>
                          </h2>
                          <span className="entry-meta">
                            Created on {node.publishDate} By{" "}
                            <Link to="/about" className="authorname">
                              {node.author}
                            </Link>
                          </span>
                        </div>
                        <div className="entry-media">
                          <Img
                            fluid={node.heroImage.fluid}
                            backgroundColor={"#f4f8fb"}
                          />
                        </div>
                        <div className="entry-content-bottom">
                          <p className="entry-content">
                            {node.body.childMarkdownRemark.excerpt}
                          </p>
                          <Link to={node.slug} className="entry-read-more">
                            <span />
                            Read More
                          </Link>
                        </div>
                      </article>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Template>
    )
  }
}

export default indexPage

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
        description
        url
      }
    }
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
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          body {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`
