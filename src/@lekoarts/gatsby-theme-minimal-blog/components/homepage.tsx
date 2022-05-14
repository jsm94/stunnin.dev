/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing"
import List from "@lekoarts/gatsby-theme-minimal-blog/src/components/list"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import { visuallyHidden } from "@lekoarts/gatsby-theme-minimal-blog/src/styles/utils"
// @ts-ignore
import Hero from "../texts/hero"
// @ts-ignore
import Bottom from "../texts/bottom"
import useFeaturedPost from "../hooks/featured-post"
import FeaturedPostView from "./featured-post-view"
import Grid from "./grid"
import useLatestPosts from "../hooks/latest-posts"
import StunninButton from "./stunnin-button"
import React from "react"
import { DownArrow } from "@styled-icons/boxicons-regular/DownArrow"


type PostsProps = {
  posts: {
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
  }[]
  [key: string]: any
}

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()
  const { siteTitle } = useSiteMetadata()

  // featured post data
  const { allPost }  = useFeaturedPost()
  const featuredPost = allPost.edges.length < 1 ? undefined : allPost.edges[0].node

  // latest posts data
  const latestPosts = useLatestPosts()
 

  return (
    <Layout>
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      <section sx={{ mb: [6, 6, 6], p: { fontSize: [1, 2, 3], mt: [2, 2, 2] }, variant: `section_hero` }}>
        <Hero/>
        <div sx={{ mt: 4, textAlign: `left`}}>
        <Link to={replaceSlashes(`/${basePath}/about`)}>
          <StunninButton>más sobre mi</StunninButton>
        </Link>
        </div>
      </section>
      <div sx={{ mb: 6, textAlign: `center` }}>
      <Link to="#featured">
          <DownArrow sx={{ width: `20px`, color: `primary`}} className="animate-bounce"/>
      </Link>
      </div>
      <FeaturedPostView featuredPost={featuredPost} />
      <Grid posts={latestPosts} showTags={false} />
      <Flex sx={{ alignItems: `center`, justifyContent: `center` }}>
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>
          <StunninButton>ver todos</StunninButton>
        </Link>
      </Flex>
    </Layout>
  )
}

export default Homepage
