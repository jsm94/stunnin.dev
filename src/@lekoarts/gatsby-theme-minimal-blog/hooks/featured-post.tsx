import { graphql, useStaticQuery } from "gatsby"

type FeaturedPostProps = {
  allPost: {
    edges: [
      {
        node: {
          id: string
          excerpt: string
          timeToRead?: number
          title: string
          slug: string
          tags?: {
            name: string
            slug: string
          }[]
          description?: string
          canonicalUrl?: string
          date: string
          banner?: {
            childImageSharp: {
              gatsbyImageData
            }
          }
        }
      }
    ]
  }
}

const useFeaturedPost = () => {
  const data = useStaticQuery<FeaturedPostProps>(graphql`
  query {
    allPost(filter: {}, sort: {fields: date, order: DESC}, limit: 1) {
      edges {
        node {
          id
          excerpt
          timeToRead
          title
          slug
          tags {
            name
            slug
          }
          description
          canonicalUrl
          date(formatString: "MMMM D, YYYY")
          banner {
            childImageSharp {
              gatsbyImageData(
                width: 400
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
  `)

  return data
}

export default useFeaturedPost
