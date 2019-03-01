import React from "react"
import Link from "gatsby-link"

export default ({ article }) => (
  <div className="articles">
    <img alt="" src={article.heroImage.file.url} />
    <h3 className="article-title">
      <Link to={`${article.slug}`}>{article.title}</Link>
    </h3>
    <p
      dangerouslySetInnerHTML={{
        __html: article.body.childMarkdownRemark.html,
      }}
    />
  </div>
)
