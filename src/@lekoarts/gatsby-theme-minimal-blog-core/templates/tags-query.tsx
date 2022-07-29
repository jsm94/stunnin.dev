import { graphql } from "gatsby"
import TagsComponent from "@lekoarts/gatsby-theme-minimal-blog-core/src/components/tags"

export default TagsComponent

export const query = graphql`
  query ($language: String!) {
    allPost(sort: { fields: tags___name, order: DESC }) {
      group(field: tags___name) {
        fieldValue
        totalCount
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
