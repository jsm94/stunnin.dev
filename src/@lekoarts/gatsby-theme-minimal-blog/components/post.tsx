/** @jsx jsx */
import * as React from "react"
import { jsx, Image } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./layout"
import ItemTags from "./item-tags"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
import PostFooter from "@lekoarts/gatsby-theme-minimal-blog/src/components/post-footer"
import StunninHeading from "./stunnin-heading"
import moment from "moment"
import 'moment/locale/es'
import { Link } from "gatsby"
import StunninButton from "./stunnin-button"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import { ArrowBackOutline } from "@styled-icons/evaicons-outline/ArrowBackOutline"

const Post = ({ data: { post } }) => {
  const { basePath, blogPath } = useMinimalBlogConfig()
  const image: string = post.banner.childImageSharp.resize.src
  moment.locale(`es`)
  const postDate = moment(post.date, "DD.MM.YYYY")
  return (
    <Layout>
      <Seo
        title={post.title}
        description={post.description ? post.description : post.excerpt}
        image={post.banner ? post.banner?.childImageSharp?.resize?.src : undefined}
        pathname={post.slug}
        canonicalUrl={post.canonicalUrl}
      />
      <StunninHeading as="h1" variant="styles.h1">
        {post.title}
      </StunninHeading>
      <p sx={{ color: `secondary`, mt: 3, mb: 3, a: { color: `secondary` }, fontSize: [1, 1, 1] }}>
        <time>{postDate.format("D [de] MMMM [de] YYYY")}</time>
        {post.timeToRead && ` — `}
        {post.timeToRead && <span>{post.timeToRead} minuto{(post.timeToRead > 1) ? `s` : ``} de lectura</span>}
      </p>
      {post.tags && (
        <p sx={{ color: `secondary`, mt: 3, mb: 3, a: { color: `primary` }, fontSize: [1, 1, 1] }}>
          <React.Fragment>
            <ItemTags tags={post.tags} />
          </React.Fragment>
        </p>
        )}
      <Image sx={{mt: 5}} src={post.banner.childImageSharp.resize.src} className="rounded-lg object-cover object-center transition-opacity" sizes="(max-width:1023px) 80vw, (min-width:1024px) and (max-width:1620px) 67vw, 1100px"/>
      <section
        sx={{
          my: 5,
          ".gatsby-resp-image-wrapper": { my: [4, 4, 5]},
          ".gatsby-resp-image-wrapper img": { borderRadius: `0.5rem`},
          variant: `layout.content`,
          "& p": {my: 4},
          "& code": {fontSize: [1, 1, 1] },
          "& .gatsby-highlight": {mb: 4}
        }}
      >
        <MDXRenderer>{post.body}</MDXRenderer>
      </section>
      <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>
          <StunninButton><ArrowBackOutline sx={{ width: `20px`, margin: `0 0 2px 0`}}/>{` blog`}</StunninButton>
      </Link>
      <PostFooter post={post} />
    </Layout>
  )
}

export default Post
