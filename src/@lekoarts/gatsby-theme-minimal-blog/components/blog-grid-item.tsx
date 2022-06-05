/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import ItemTags from "./item-tags"
import moment from "moment"
import 'moment/locale/es'
import React from "react"
import ItemTags from "./item-tags"

const BlogGridItem = ({ post, showTags = true, showDivider }) => {
  const image = getImage(post.banner)
  moment.locale(`es`)
  const postDate = moment(post.date)
  return (
    <Link to={post.slug} className="group">
      <GatsbyImage alt={""} image={image} className="object-cover w-full h-64 mb-6 lg:h-80 xl:h-96 
        transition ease-in-out group-hover:ring-2 ring-offset-4 ring-current ring-offset-zinc-50
        dark:ring-offset-zinc-900 duration-300 grayscale group-hover:grayscale-0"/>
      <p className="mb-2">{postDate.format(`D MMMM, YYYY`)} · {post.timeToRead} min</p>
      {post.tags && (
        <p sx={{ color: `secondary`, mt: 3, mb: 3, a: { color: `primary` }, fontSize: [1, 1, 1] }}>
          <React.Fragment>
            <ItemTags tags={post.tags} />
          </React.Fragment>
        </p>
        )}
      <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
        {post.title}
      </h5>
      {showDivider && (
        <hr className="my-12 lg:hidden"/>
      )}
    </Link>
  )
}

export default BlogGridItem
