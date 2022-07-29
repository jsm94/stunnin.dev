import { graphql } from "gatsby"
import BlogComponent from "@lekoarts/gatsby-theme-minimal-blog-core/src/components/blog"

export default BlogComponent

export const query = graphql`
  query ($formatString: String!, $language: String!) {
    allPost(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        title
        date(formatString: $formatString)
        excerpt
        timeToRead
        description
        tags {
          name
          slug
        }
      }
    }
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
