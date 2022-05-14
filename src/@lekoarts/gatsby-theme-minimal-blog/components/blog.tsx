/** @jsx jsx */
import { jsx, Heading, Flex } from "theme-ui"
import { Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
import useAllPosts from "../hooks/all-posts"
import Grid from "./grid"
import StunninHeading from "./stunnin-heading"

const Blog = ({ posts }) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  const allPosts = useAllPosts()

  return (
    <Layout>
      <Seo title="Blog" />
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
        <StunninHeading as="h1" variant="styles.h1" sx={{ marginY: 2 }}>
          blog
        </StunninHeading>
        {/* <Link
          sx={(t) => ({ ...t.styles?.a, variant: `links.secondary`, marginY: 2 })}
          to={replaceSlashes(`/${basePath}/${tagsPath}`)}
        >
          View all tags
        </Link> */}
      </Flex>
      <Grid posts={allPosts} showTags={false} skipFirst={false} />
    </Layout>
  )
}

export default Blog
