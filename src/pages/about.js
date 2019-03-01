import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import get from "lodash/get"
import Template from "../components/layout"

export class About extends Component {
  render() {
    const authors = get(this, `props.data.allContentfulPerson.edges`)
    return (
      <Template>
        <section className="about-us">
          <div className="container">
            {authors.map(({ node }) => {
              return (
                <div className="author-box" key={node.id}>
                  <div className="row">
                    <div className="col-lg-5 col-md-12 text-left">
                      <div className="author-image">
                        <img
                          src={node.image.fixed.src}
                          alt="avatar"
                          className="avatar-img"
                        />
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-12 text-left">
                      <h1 className="has-animation animate-in" data-delay="10">
                        I am <b>{node.name}.</b>
                      </h1>
                      <p className="has-animation animate-in" data-delay="20">
                        A developer in {node.company}
                      </p>
                      <p
                        className="author-bio"
                        dangerouslySetInnerHTML={{
                          __html: node.shortBio.childMarkdownRemark.html,
                        }}
                      />
                      <p className="has-animation animate-in" data-delay="20">
                        Email Me:&nbsp;&nbsp;
                        <strong>
                          <Link to="">{node.email}</Link>
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </Template>
    )
  }
}

export default About

export const pageQuery = graphql`
  query aboutPage {
    allContentfulPerson {
      edges {
        node {
          id
          name
          company
          email
          shortBio {
            childMarkdownRemark {
              html
            }
          }
          image {
            fixed {
              src
            }
          }
        }
      }
    }
  }
`
