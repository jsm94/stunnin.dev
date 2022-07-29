/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import { visuallyHidden } from "@lekoarts/gatsby-theme-minimal-blog/src/styles/utils"

import useFeaturedPost from "../hooks/featured-post"
import FeaturedPostView from "./featured-post-view"
import Grid from "./grid"
import useLatestPosts from "../hooks/latest-posts"
import StunninButton from "./stunnin-button"
import { DownArrow } from "@styled-icons/boxicons-regular/DownArrow"

import {Link, useTranslation} from 'gatsby-plugin-react-i18next'

import {Link as LinkGatsby} from 'gatsby'

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
  const {t} = useTranslation()

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
        <h3 sx={{ fontSize: [5], fontWeight: 700, color: `primary`}}>{t(`Hola! soy Juanan 👋🏽`)}</h3>
        <br/>
        <p sx={{ fontSize: [1], color: `text`}}>{t(`Full-Stack Developer apasionado por crear y aprender sobre tecnología y otros mundos`)}</p>
        <div sx={{ mt: 4, textAlign: `left`}}>
        <Link to={replaceSlashes(`/${basePath}/about`)}>
          <StunninButton>{t(`más sobre mi`)}</StunninButton>
        </Link>
        </div>
      </section>
      <div sx={{ mb: 6, textAlign: `center` }}>
      <LinkGatsby to="#featured">
          <DownArrow sx={{ width: `20px`, color: `primary`}} className="animate-bounce"/>
      </LinkGatsby>
      </div>
      <FeaturedPostView featuredPost={featuredPost} headerText={t(`Destacado`)} />
      <Grid posts={latestPosts} showTags={false} />
      <Flex sx={{ alignItems: `center`, justifyContent: `center` }}>
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>
          <StunninButton>{t(`ver todos`)}</StunninButton>
        </Link>
      </Flex>
    </Layout>
  )
}

export default Homepage