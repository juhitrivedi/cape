import React from "react"
import get from "lodash/get"
import Helmet from "react-helmet"
import Template from "../components/layout"
import { Link } from "gatsby"

class indexPage extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const posts = get(this, "props.data.allContentfulBlog.edges")

    return (
      <Template>
        <div className="indexpage">
          <Helmet title={siteTitle} />
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
                            Created on {node.publishDate}
                          </span>
                        </div>
                        <div className="entry-media">
                          <img src={node.heroImage.file.url} alt={node.title} />
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
    allContentfulBlog(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            file {
              url
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
