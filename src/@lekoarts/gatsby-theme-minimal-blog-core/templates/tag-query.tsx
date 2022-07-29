import { graphql } from "gatsby"
import TagComponent from "@lekoarts/gatsby-theme-minimal-blog-core/src/components/tag"

export default TagComponent

export const query = graphql`
  query ($slug: String!, $formatString: String!, $language: String!) {
    allPost(sort: { fields: date, order: DESC }, filter: { tags: { elemMatch: { slug: { eq: $slug } } } }) {
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
