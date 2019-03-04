import React, { Component } from "react"
import get from "lodash/get"
import Template from "../components/layout"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"

class BlogPostTemplate extends Component {
  render() {
    const post = get(this, "props.data.contentfulBlog")

    return (
      <Template>
        <Helmet title={`${post.title}`} />
        <div className="inner-blog-post">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="entry-media">
                  <Img
                    fluid={post.heroImage.fluid}
                    backgroundColor={"#f4f8fb"}
                  />
                </div>
                <h1 className="section-headline"> {post.title} </h1>
                <p> {post.publishDate} </p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.body.childMarkdownRemark.html,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Template>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query blogPostQuery($slug: String) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        file {
          url
        }
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`
