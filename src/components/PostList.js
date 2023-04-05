import * as React from "react"
import { blogBaseUrl } from "../constants"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PostList = ({ posts }) => {

  return (
    <div id="posts" className="section-padding">
      <div className="content-container">
        <h2 className="section-title">What's New</h2>
          <ol style={{ listStyle: `none` }}>
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug
              const featuredImg = getImage(post.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData)

              return (
                <li key={post.fields.slug}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <section className="row">
                      <a href={`${blogBaseUrl}${post.fields.slug}`}>
                        <GatsbyImage image={featuredImg} className="post-list-item-img" />
                      </a>
                      <div className="pl-5">
                        <h2>
                          <a href={`${blogBaseUrl}${post.fields.slug}`}>
                            <span itemProp="headline">{title}</span>
                          </a>
                        </h2>
                        <small>{post.frontmatter.date}</small>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: post.frontmatter.description || post.excerpt,
                          }}
                          itemProp="description"
                        />
                      </div>

                    </section>
                    <section>
                    </section>
                  </article>
                </li>
              )
            })}
          </ol>
        </div>
    </div>
  )
}

export default PostList;
