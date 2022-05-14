import { graphql, useStaticQuery } from "gatsby"

type AllPostsProps = {
  latestPosts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
    banner?: {
      childImageSharp: {
        resize: {
          src: string
        }
      }
    }
  }[]
  [key: string]: any
}

const useAllPosts = () => {
  const data = useStaticQuery<AllPostsProps>(graphql`
  query {
    allPost(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        title
        date(formatString: "MMMM D, YYYY")
        excerpt
        timeToRead
        description
        tags {
          name
          slug
        }
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
  `)

  return data.allPost.nodes
}

export default useAllPosts
