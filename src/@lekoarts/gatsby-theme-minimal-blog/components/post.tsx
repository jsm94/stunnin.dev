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

const px = [`32px`, `16px`, `8px`, `4px`]
const shadow = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`)

const Post = ({ data: { post } }) => {
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
      <p sx={{ color: `secondary`, mt: 3, mb: 3, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
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
          ".gatsby-resp-image-wrapper": { my: [4, 4, 5], boxShadow: shadow.join(`, `) },
          variant: `layout.content`,
          "& p": {mb: 4},
          "& .gatsby-highlight": {mb: 4}
        }}
      >
        <MDXRenderer>{post.body}</MDXRenderer>
      </section>
      <PostFooter post={post} />
    </Layout>
  )
}

export default Post
